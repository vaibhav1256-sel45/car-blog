'use client'
import { useState, useMemo, useEffect } from "react";

import { useAppDispatch, useAppSelector } from "@/hooks/ReduxHooks";
import Layout from "@/Layout/Layout";
import { fetchCarBlogPosts } from "@/redux/slices/carSlice";
import Loader from "@/app/loading";
import ErrorPage from "@/app/error";
import InfiniteScroll from "react-infinite-scroll-component";
import FilterBar from "@/components/Filters/FilterBar";
import { CarBlogPost } from "@/types/Cartypes";
import CardList from "@/components/Blogs/CarList";
import HeroSection from "@/components/Blogs/HeroSection";


function page() {
      const data = useAppSelector(state => state.carBlogPosts);
      const limit = 9;
      const [visibleCount, setVisibleCount] = useState(limit);
      const dispatch = useAppDispatch();
      const [filteredPosts,setFilteredPosts]=useState<CarBlogPost[]>([])
      // Filter states
      const [selectedTag, setSelectedTag] = useState("");
      const [search, setSearch] = useState("");
    
      useEffect(() => {
        dispatch(fetchCarBlogPosts());
      }, [dispatch]);
       
      //
    
      // Get unique tags from posts
      const tags = useMemo(() => {
        const set = new Set<string>();
        data.posts.forEach((p) => {
          if (Array.isArray(p.tag)) p.tag.forEach((t: string) => set.add(t));
          else if (p.tag) set.add(p.tag);
        });
        return Array.from(set);
      }, [data.posts]);
    
    
      // get Suggestions
    
     const suggestions = useMemo(() => {
        const set = new Set<string>();
        data.posts.forEach((p) => {
         if(p.author) set.add(p.author)
          if(p.specifications.make) set.add(p.specifications.make)
      
        });
        tags.forEach(tag=>set.add(tag))
        return Array.from(set);
      }, [data.posts]);
     
      // Filter posts
      useEffect(()=>{
       setFilteredPosts(()=>
          data.posts.filter((post) => {
          const matchTag = !selectedTag || (Array.isArray(post.tag) ? post.tag.includes(selectedTag) : post.tag === selectedTag);
          const matchSearch =
            !search ||
            (post.title && post.title.toLowerCase().includes(search.toLowerCase())) ||
            (post.tag && (Array.isArray(post.tag)?post.tag.map(val=>val.toLowerCase()).includes(search.toLowerCase()):(post.tag.toLowerCase().includes(search.toLowerCase())))) ||
            (post.author && post.author.toLowerCase().includes(search.toLowerCase())) ||
            (post.specifications.make && post.specifications.make.toLowerCase().includes(search.toLowerCase()))
            
          return matchTag && matchSearch;
        }
       )
      )
      },[data.posts, selectedTag, search])
    
    
      const loadMore = () => {
        setTimeout(() => {
          setVisibleCount(prev => prev + limit);
        }, 1500);
      };
    
      if (data.status === 'loading') return <Loader scrolling={false} />;
      if (data.error) return <ErrorPage />;
  return (
    <Layout>
        <HeroSection/>
        <div className="px-10 sm:px-12 md:px-60 mt-10">
             <FilterBar
                     tags={tags}
                     selectedTag={selectedTag}
                     onTagSelect={setSelectedTag}
                     onSearch={setSearch}
                     suggestions={suggestions}
                   /> 
                    <section className="mt-8">
        <div className="mb-5 flex items-center justify-between flex-wrap gap-4">
          <h3 className="text-2xl font-bold">Featured Articles</h3>
          <p className="text-1xl font-bold">{filteredPosts.length} Articles Found</p>
        </div>
      {filteredPosts.length<=0?(
  <div className="flex flex-col items-center justify-center py-16">
    <svg
      className="w-24 h-24 text-indigo-300 mb-4"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      viewBox="0 0 48 48"
    >
      <circle cx="24" cy="24" r="20" stroke="currentColor" strokeWidth="3" fill="#EEF2FF"/>
      <path
        d="M17 21h14M17 29h10"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <ellipse cx="24" cy="24" rx="20" ry="8" fill="#C7D2FE" opacity="0.3"/>
      <path
        d="M24 34a10 10 0 100-20 10 10 0 000 20z"
        fill="#6366F1"
        opacity="0.15"
      />
    </svg>
    <h4 className="text-2xl font-bold text-indigo-700 mb-2">No Articles Found</h4>
    <p className="text-gray-500 text-center max-w-md">
      We couldn't find any articles matching your search or selected tag.<br />
      Try adjusting your filters or search for something else!
    </p>
  </div>
)
       
     :  <InfiniteScroll
          dataLength={Math.min(visibleCount, filteredPosts.length)}
          next={loadMore}
          hasMore={filteredPosts.length - visibleCount > 0}
          loader={<Loader scrolling={true} />}
        >
          <CardList cards={filteredPosts} visibleCount={visibleCount} />
        </InfiniteScroll>}
      </section>
        </div>
    </Layout>
  )
}

export default page