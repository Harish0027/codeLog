import { assets } from "@/assets/assets";
import Sidebar from "@/components/AdminComponents/Sidebar";
import Image from "next/image";
import React, { ReactNode } from "react";
import { ToastContainer } from "react-toastify";

interface ChildrenProps {
  children: ReactNode;
}

// ✅ Correct layout with sidebar on the side
const Layout = ({ children }: ChildrenProps) => {
  return (
    <>
      <div className="flex h-screen">
        <ToastContainer theme="dark" />
        <Sidebar />
        <div className="flex flex-col w-full">
          <div className="flex items-center justify-between w-full py-3 max-h-[60px] px-12 border-b border-black">
            <h3 className="font-medium">Admin Panel</h3>
            <Image src={assets.author_img} width={40} alt="" />
          </div>
          {children}
        </div>
      </div>

    </>
  );
};

export default Layout;
