"use client";

import { blog_data } from "@/assets/assets";
import React, { useState } from "react";
import BlogItem, { BlogProps } from "./BlogItem";

const BlogList = () => {
  const [category, setCategory] = useState<string>("All");
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
        {blog_data.map((blog:BlogProps, index:number) => {
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
