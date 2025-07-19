"use client";

import { assets } from "@/assets/assets";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Sidebar = () => {
  return (
    <div className="flex flex-col bg-slate-100">
      {/* Top Logo Section */}
      <div className="px-2 sm:pl-14 py-3 border border-black">
        <Image src={assets.logo} width={120} alt="Logo" />
      </div>

      {/* Menu or Avatar Section */}
      <div className="w-28 sm:w-80 h-[100vh] relative py-12 border border-black">
        <div className="w-[50%] sm:w-[80%] absolute right-0">
          <Link href={"/admin/addBlog"}>
            <div className="flex items-center border border-black gap-3 font-medium px-3 py-2 bg-white shadow-[-5px_5px_0px_rgba(0,0,0,1)]">
              <Image
                src={assets.add_icon}
                width={28}
                height={30}
                alt="Profile"
              />
              <p>Add blogs</p>
            </div>
          </Link>
          <Link href={"/admin/blogList"}>
            <div className="mt-5 flex items-center border border-black gap-3 font-medium px-3 py-2 bg-white shadow-[-5px_5px_0px_rgba(0,0,0,1)]">
              <Image
                src={assets.blog_icon}
                width={28}
                height={30}
                alt="Profile"
              />
              <p>Blog lists</p>
            </div>
          </Link>

          <Link href={"/admin/subscriptions"}>
            <div className="mt-5 flex items-center border border-black gap-3 font-medium px-3 py-2 bg-white shadow-[-5px_5px_0px_rgba(0,0,0,1)]">
              <Image
                src={assets.email_icon}
                width={28}
                height={30}
                alt="Profile"
              />
              <p>Subscription</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
