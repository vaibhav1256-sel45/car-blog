'use client'
import { useEffect } from "react";
import dynamic from "next/dynamic";
import HeroSection from "@/components/Home/HeroSection";
import { useAppDispatch, useAppSelector } from "@/hooks/ReduxHooks";
import Layout from "@/Layout/Layout";
import { fetchCarBlogPosts } from "@/redux/slices/carSlice";
import Loader from "./loading";
import ErrorPage from "./error";
const BlogLayout = dynamic(() => import("@/components/Home/BlogLayout"));
const NewTechnologySection = dynamic(() => import("@/components/Home/NewTechnologySection"));
const CategorySection = dynamic(() => import("@/components/Home/CategorySection"));

export default function Home() {
  const data = useAppSelector((state) => state.carBlogPosts);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchCarBlogPosts());
  }, [dispatch]);

  if (data.status === 'loading') return <Loader scrolling={false} />;
  if (data.error) return <ErrorPage />;

  return (
    <Layout>
      <HeroSection />
      <section className="px-10 sm:px-12 md:px-60">
        <BlogLayout />
        <NewTechnologySection />
        <CategorySection />
        <NewTechnologySection />
      </section>
    </Layout>
  );
}
