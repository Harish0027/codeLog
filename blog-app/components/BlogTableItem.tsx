"use client"
import { assets } from "@/assets/assets";
import axios from "axios";
import { StaticImageData } from "next/image";
import React from "react";
import { toast } from "react-toastify";

export interface BlogProps {
  _id: string;
  title: string;
  description: string;
  image: string;
  date: number;
  category: string;
  author: string;
  author_img: string | StaticImageData;
}
const handleDelete=async(blogId:string)=>{
    const res=axios.delete(`/api/blog/${blogId}`);
    if((await res).data.success){
        toast.success("Blog deleted Successfully!!!")
    }else{
        toast.error("Failed to delete Blog, try again!!")
    }
}

const BlogTableItem = ({blog}:{blog:BlogProps} ) => {
  console.log(blog);
  return (
    <tr className="bg-white border-b">
      <th
        scope="row"
        className="items-center gap-3 hidden sm:flex px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
      >
        <img
          src={
            typeof blog.author_img === "string"
              ? blog.author_img
              : blog.author_img.src
          }
          alt="Author"
          className="w-10 h-10 rounded-full"
        />
        {blog.author}
      </th>
      <td className="px-6 py-4">{blog.title ? blog.title : "no title"}</td>
      <td className="px-6 py-4">11 Jan 2024</td>
      <td className="px-6 py-4 cursor-pointer" onClick={()=>handleDelete(blog._id)}>x</td>
    </tr>
  );
};
export default BlogTableItem;
