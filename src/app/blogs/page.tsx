'use client'
import { useState, useMemo, useEffect } from "react";
import { useAppSelector } from "@/hooks/ReduxHooks";
import Layout from "@/Layout/Layout";
import Loader from "@/app/loading";
import InfiniteScroll from "react-infinite-scroll-component";
const FilterBar=dynamic(()=>import("@/components/Filters/FilterBar"))
import { CarBlogPost } from "@/types/Cartypes";
const CardList =dynamic(()=>import("@/components/Blogs/CarList")) ;
import HeroSection from "@/components/Blogs/HeroSection";
import dynamic from "next/dynamic";
import NoDataFound from "../NoDataFound";

function Page() {
  const data = useAppSelector(state => state.carBlogPosts);
  const limit = 9;
  const [visibleCount, setVisibleCount] = useState(limit);

  const [filteredPosts, setFilteredPosts] = useState<CarBlogPost[]>([]);
  const [selectedTag, setSelectedTag] = useState("");
  const [search, setSearch] = useState("");
  const tags = useMemo(() => {
    const set = new Set<string>();
    data.posts.forEach((p) => {
      if (Array.isArray(p.tag)) p.tag.forEach((t: string) => set.add(t));
      else if (p.tag) set.add(p.tag);
    });
    return Array.from(set);
  }, [data.posts]);

  const suggestions = useMemo(() => {
    const set = new Set<string>();
    data.posts.forEach((p) => {
      if (p.author) set.add(p.author);
      if (p.specifications.make) set.add(p.specifications.make);
    });
    tags.forEach(tag => set.add(tag));
    return Array.from(set);
  }, [data.posts]);

  // Filter posts
  useEffect(() => {
    setFilteredPosts(() =>
      data.posts.filter((post) => {
        const matchTag = !selectedTag || (Array.isArray(post.tag) ? post.tag.includes(selectedTag) : post.tag === selectedTag);
        const matchSearch =
          !search ||
          (post.title && post.title.toLowerCase().includes(search.toLowerCase())) ||
          (post.tag && (Array.isArray(post.tag) ? post.tag.map(val => val.toLowerCase()).includes(search.toLowerCase()) : (post.tag.toLowerCase().includes(search.toLowerCase())))) ||
          (post.author && post.author.toLowerCase().includes(search.toLowerCase())) ||
          (post.specifications.make && post.specifications.make.toLowerCase().includes(search.toLowerCase()));

        return matchTag && matchSearch;
      })
    );
  }, [data.posts, selectedTag, search]);

  const loadMore = () => {
    setTimeout(() => {
      setVisibleCount(prev => prev + limit);
    }, 1500);
  };

 

  return (
    <Layout>
      <HeroSection />
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
          {filteredPosts.length <= 0 ? (
          <NoDataFound/>
          ) : (
            <InfiniteScroll
              dataLength={Math.min(visibleCount, filteredPosts.length)}
              next={loadMore}
              hasMore={filteredPosts.length - visibleCount > 0}
              loader={<Loader scrolling={true} />}
            >
              <CardList cards={filteredPosts} visibleCount={visibleCount} />
            </InfiniteScroll>
          )}
        </section>
      </div>
    </Layout>
  )
}

export default Page;
