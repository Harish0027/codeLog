"use client";

import React, { ChangeEvent, useState } from "react";
import Image, { StaticImageData } from "next/image";
import { assets } from "@/assets/assets";
import axios from "axios";
import { toast } from "react-toastify";

export interface BlogProps {
  title: string;
  description: string;
  category: string;
  image: File | null; 
  date: number;
  author: string;
  author_img: string;
}

const AddBlogPage: React.FC = () => {
  const [preview, setPreview] = useState<string | StaticImageData>(
    assets.upload_area
  );

  const [data, setData] = useState<BlogProps>({
    title: "",
    description: "",
    category: "Startup",
    image: null,
    date: Date.now(),
    author: "Alex Bennett", // Fixed
    author_img: "/author_img.png", // Fixed
  });

  const onChangeHandler = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setData((prev) => ({ ...prev, [name]: value }));
  };

  const onDescriptionChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setData((prev) => ({ ...prev, description: e.target.value }));
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const imageURL = URL.createObjectURL(file);
      setPreview(imageURL);
      setData((prev) => ({ ...prev, image: file })); // Save the File object
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!data.image) {
      toast.error("Please upload an image");
      return;
    }

    const formData = new FormData();
    formData.append("title", data.title);
    formData.append("description", data.description);
    formData.append("category", data.category);
    formData.append("author", data.author);
    formData.append("author_img", data.author_img);
    formData.append("image", data.image); // File now!

    try {
      const response = await axios.post("/api/blog", formData);
      if (response.data.success) {
        toast.success("Blog posted successfully!");
      }
    } catch (err) {
      console.error(err);
      toast.error("Failed to post blog");
    }
  };

  return (
    <form className="pt-5 px-5 sm:pt-12 sm:pl-16" onSubmit={handleSubmit}>
      <p className="text-xl">Upload thumbnail</p>

      <label htmlFor="image">
        <Image
          className="mt-4 cursor-pointer"
          src={preview}
          alt="Upload area"
          width={140}
          height={140}
        />
      </label>

      <input
        type="file"
        id="image"
        hidden
        required
        accept="image/*"
        onChange={handleImageChange}
      />

      <p className="text-xl mt-4">Blog title</p>
      <input
        className="w-full sm:w-[500px] mt-4 px-4 py-3 border"
        type="text"
        name="title"
        value={data.title}
        onChange={onChangeHandler}
        placeholder="Type here"
        required
      />

      <p className="text-xl mt-4">Blog Description</p>
      <textarea
        className="w-full sm:w-[500px] mt-4 px-4 py-3 border"
        name="description"
        value={data.description}
        onChange={onDescriptionChange}
        placeholder="Write content here"
        required
      />

      <p className="text-xl mt-4">Category</p>
      <select
        name="category"
        value={data.category}
        onChange={onChangeHandler}
        className="w-40 mt-4 px-4 py-3 border text-gray-500"
      >
        <option value="Startup">Startup</option>
        <option value="Technology">Technology</option>
        <option value="Lifestyle">Lifestyle</option>
      </select>

      <br />
      <button type="submit" className="mt-8 w-40 h-12 bg-black text-white">
        Add
      </button>
    </form>
  );
};

export default AddBlogPage;
