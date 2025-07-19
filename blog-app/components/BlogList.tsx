"use client";

import React, { useEffect, useState } from "react";
import BlogItem, { BlogProps } from "./BlogItem";
import axios from "axios";
import { toast } from "react-toastify";
import { blog_data } from "@/assets/assets";

const BlogList = () => {
  const [blogs,setBlogs]=useState<BlogProps[]>([]);
  const [category, setCategory] = useState<string>("All");

  const fetchBlogs=async()=>{
    const res=await axios.get("/api/blog");
    if(res.data.success) {
      setBlogs(res.data.blogs);
    }else{
      toast.error("Error in fetching Blogs")
    }
  }
  useEffect(()=>{
    fetchBlogs();
  },[]);

  return (
    <div>
      <div className="flex justify-center gap-6 my-10">
        <button
          className={`${
            category === "All" ? "bg-black text-white" : ""
          }  py-1 px-4 rounded-sm`}
          onClick={() =>
            setCategory("All")
          }
        >
          All
        </button>
        <button
          className={`${
            category === "Technology" ? "bg-black text-white" : ""
          } text-black py-1 px-4 rounded-sm`}
          onClick={() =>
            setCategory((prev) =>
              prev === "Technology" ? "All" : "Technology"
            )
          }
        >
          Technology
        </button>
        <button
          className={`${
            category === "Startup" ? "bg-black text-white" : ""
          }  py-1 px-4 rounded-sm`}
          onClick={() =>
            setCategory((prev) => (prev === "Startup" ? "All" : "Startup"))
          }
        >
          Startup
        </button>
        <button
          className={`${
            category === "Lifestyle" ? "bg-black text-white" : ""
          } py-1 px-4 rounded-sm`}
          onClick={() =>
            setCategory((prev) => (prev === "Lifestyle" ? "All" : "Lifestyle"))
          }
        >
          Lifestyle
        </button>
      </div>
      <div className="flex flex-wrap justify-around gap-1 gap-y-10 mb-16 xl:mx-24">
        {blogs.map((blog:BlogProps, index:number) => {
          return category === "All" ? (
            <div key={index}>
              <BlogItem {...blog} />
            </div>
          ) : (
            blog.category === category && (
              <div key={index}>
                <BlogItem {...blog} />
              </div>
            )
          );
        })}
      </div>
    </div>
  );
};

export default BlogList;
