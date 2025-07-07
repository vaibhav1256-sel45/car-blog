'use client'
import { useEffect } from "react";
import dynamic from "next/dynamic";
import HeroSection from "@/components/Home/HeroSection";
import { useAppDispatch } from "@/hooks/ReduxHooks";
import Layout from "@/Layout/Layout";
import { fetchCarBlogPosts } from "@/redux/slices/carSlice";
const BlogLayout = dynamic(() => import("@/components/Home/BlogLayout"));
const NewTechnologySection = dynamic(() => import("@/components/Home/NewTechnologySection"));
const CategorySection = dynamic(() => import("@/components/Home/CategorySection"));

export default function Home() {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchCarBlogPosts());
  }, [dispatch]);
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
