'use client'
import { useState, useMemo, useEffect } from "react";
import CardList from "@/components/Blogs/CarList";
import HeroSection from "@/components/Home/HeroSection";
import { useAppDispatch, useAppSelector } from "@/hooks/ReduxHooks";
import Layout from "@/Layout/Layout";
import { fetchCarBlogPosts } from "@/redux/slices/carSlice";
import Loader from "@/app/loading";
import ErrorPage from "@/app/error";
import InfiniteScroll from "react-infinite-scroll-component";
import FilterBar from "@/components/Filters/FilterBar";
import { CarBlogPost } from "@/types/Cartypes";
import { BlogLayout } from "@/components/Home/BlogLayout";
import { NewTechnologySection } from "@/components/Home/NewTechnologySection";
import { CategorySection } from "@/components/Home/CategorySection";


export default function Home() {
 
 
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
