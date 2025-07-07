'use client'
import {  useEffect } from "react";
import HeroSection from "@/components/Home/HeroSection";
import { useAppDispatch, useAppSelector } from "@/hooks/ReduxHooks";
import Layout from "@/Layout/Layout";
import { fetchCarBlogPosts } from "@/redux/slices/carSlice";
import { BlogLayout } from "@/components/Home/BlogLayout";
import { NewTechnologySection } from "@/components/Home/NewTechnologySection";
import { CategorySection } from "@/components/Home/CategorySection";


export default function Home() {
  const dispatch=useAppDispatch()
    useEffect(() => {
        dispatch(fetchCarBlogPosts());
      }, [dispatch]);
       
 
  return (
    <Layout>
      <HeroSection />
      <section  className="px-10 sm:px-12 md:px-60">
      <BlogLayout/>
      <NewTechnologySection/>
      <CategorySection/>
      <NewTechnologySection/>
      </section>
    </Layout>
  );
}
