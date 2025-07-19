"use client";
import { BlogProps } from "@/components/BlogItem";
import BlogTableItem from "@/components/BlogTableItem";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

const page = () => {
  const [blogs, setBlogs] = useState<BlogProps[]>([]);

  const fetchBlogs = async () => {
    const res = await axios.get("/api/blog");
    if (res.data.success) {
      setBlogs(res.data.blogs);
    } else {
      toast.error("Error in fetching Blogs");
    }
  };
  useEffect(() => {
    fetchBlogs();
  }, []);
  return (
    <div className="flex-1 pt-5 px-5 sm:pt-12 sm:pl-16">
      <h1 className="text-2xl font-bold mb-4">All Blogs</h1>

      <div className="relative h-[80vh] max-w-[850px] overflow-x-auto mt-4 border rounded">
        <table className="w-full text-sm text-gray-500">
          <thead className="text-sm text-gray-700 text-left uppercase bg-gray-100">
            <tr>
              <th scope="col" className="px-6 hidden sm:block px-6 py-3">
                Author name
              </th>
              <th scope="col" className="px-6 py-3">
                Blog title
              </th>
              <th scope="col" className="px-6 py-3">
                Date
              </th>
              <th scope="col" className=" px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody className="text-gray-800">
            {blogs.map((blog, index) => (
              <BlogTableItem key={index} blog={blog} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default page;
