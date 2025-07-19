import { assets } from "@/assets/assets";
import Image from "next/image";
import React from "react";
import { StaticImageData } from "next/image";
import Link from "next/link";

export interface BlogProps {
    _id: string;
    title: string;
    description: string;
    image: StaticImageData;
    date: number;
    category: string;
    author: string;
    author_img: StaticImageData;
}

const BlogItem = (blog : BlogProps) => {
  console.log(blog);
  return (
    
    <div className="max-w-[330px] sm:max-w-[300px] bg-white border border-black shadow-[-7px_7px_0px_#000] hover:shadow-lg hover:translate-x-1 hover:-translate-y-1 transition-all duration-300">
        <Link  href={`/blog/${blog._id}`} >
        <Image
        src={blog?.image}
        alt={"img"}
        width={400}
        height={400}
        className="border-b border-black"
      /></Link>
      
      <p className="ml-5 mt-5 px-1 inline-block bg-black text-white text-sm">
        {blog?.category}
      </p>
      <div className="p-5">
        <h5 className="mb-2 text-lg font-medium tracking-tight text-gray-900">
          {blog?.title}
        </h5>
        <p className="mb-3 text-sm tracking-tight text-gray-700">
          {blog?.description}
        </p>
        <div className="inline-flex items-center py-2 font-semibold text-center">
          Read more{" "}
          <Image className="ml-2" src={assets.arrow} alt="arrow" width={12} />
        </div>
      </div>
    </div>
  );
};

export default BlogItem;
