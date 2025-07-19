"use client";
import { assets, blog_data } from "@/assets/assets";
import { BlogProps } from "@/components/BlogItem";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

const BlogDetail = () => {
  const [blogDetail, setBlogDetail] = useState<BlogProps | null>(null);
  const params = useParams();
  const blogId = params?.blogId;

  const fetchBlogDetail = async () => {
    const res = await axios.get(`/api/blog/${blogId}`);

    if (res.data.success) {
      setBlogDetail(res.data.blog);
    } else {
      toast.error("Error in fetching Blog detail");
    }
  };

  useEffect(() => {
    if (blogId) {
      fetchBlogDetail();
    }
  }, [blogId]);

  if (!blogDetail) return <div>Loading...</div>;

  return (
    <div className="bg-gray-200 py-5 px-5 md:px-12 lg:px-28">
      {/* Header */}
      <div className="flex justify-between items-center">
        <Link href={"/"}>
          <Image
            src={assets.logo}
            width={180}
            alt=""
            className="w-[130px] sm:w-auto"
          />
        </Link>
        <button className="flex items-center gap-2 font-medium py-1 px-3 sm:py-3 sm:px-6 border border-black shadow-[-7px_7px_0px_#000000]">
          Get started
          <Image src={assets.arrow} alt="/" />
        </button>
      </div>

      {/* Title and Author */}
      <div className="text-center my-24">
        <h1 className="text-2xl sm:text-5xl font-semibold max-w-[700px] mx-auto">
          {blogDetail.title}
        </h1>
        <Image
          className="mx-auto mt-6 border border-white rounded-full"
          src={blogDetail.author_img}
          width={60}
          height={60}
          alt=""
        />
        <p className="mt-1 pb-2 text-lg max-w-[740px] mx-auto">
          {blogDetail.author}
        </p>
      </div>

      {/* Main Image */}
      <div className="mx-5 max-w-[800px] md:mx-auto mt-[-100px] mb-10">
        <Image
          className="border-4 border-white"
          src={blogDetail.image}
          width={1280}
          height={720}
          alt=""
        />
      </div>

      {/* Description and Steps */}
      <div>
        <h1 className="my-8 text-[26px] font-semibold">Introduction:</h1>
        <p>{blogDetail.description}</p>

        <h3 className="my-5 text-[18px] font-semibold">
          Step 1: Self-Reflection and Awareness
        </h3>
        <p className="my-3">
          Before you can manage your lifestyle, you must have a deep
          understanding of yourself. Before you can manage your lifestyle, you
          must have a deep understanding of yourself. Before you can manage your
          lifestyle, you must have a deep understanding of yourself.
        </p>

        <h3 className="my-5 text-[18px] font-semibold">
          Step 2: Self-Reflection and Awareness
        </h3>
        <p className="my-3">
          Before you can manage your lifestyle, you must have a deep
          understanding of yourself. Before you can manage your lifestyle, you
          must have a deep understanding of yourself. Before you can manage your
          lifestyle, you must have a deep understanding of yourself.
        </p>

        <h3 className="my-5 text-[18px] font-semibold">
          Step 3: Self-Reflection and Awareness
        </h3>
        <p className="my-3">
          Before you can manage your lifestyle, you must have a deep
          understanding of yourself. Before you can manage your lifestyle, you
          must have a deep understanding of yourself. Before you can manage your
          lifestyle, you must have a deep understanding of yourself.
        </p>

        <h3 className="my-5 text-[18px] font-semibold">Conclusion:</h3>
        <p className="my-3">
          Managing your lifestyle is a journey that requires commitment and
          consistency. Before you can manage your lifestyle, you must have a
          deep understanding of yourself.
        </p>

        {/* Share Section */}
        <div className="my-24">
          <p className="text-black font font-semibold my-4">
            Share this article
          </p>
          <div className="flex gap-4">
            <Image src={assets.facebook_icon} width={50} alt="" />
            <Image src={assets.twitter_icon} width={50} alt="" />
            <Image src={assets.googleplus_icon} width={50} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetail;
