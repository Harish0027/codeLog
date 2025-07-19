import { connectToMongoose } from "@/app/lib/config/db";
import { BlogModel } from "@/app/lib/models/BlogModel";
import { Types } from "mongoose";
import { NextResponse } from "next/server";
import path from "path";
import fs from "fs/promises";

export async function GET(
  req: Request,
  { params }: { params: { blogId: Types.ObjectId } }
) {
  try {
    await connectToMongoose();
    const blogId = params.blogId;

    const blog = await BlogModel.findById(blogId);
    return Response.json({
      blog,
      message: "Blog detail fetched Successfully!!!",
      success: true,
    });
  } catch (error) {
    console.log(error);
  }
}
export async function DELETE(
  req: Request,
  { params }: { params: { blogId: string } }
) {
  try {
    await connectToMongoose();

    const blogId = params.blogId;
    const blog = await BlogModel.findByIdAndDelete(blogId);

    if (!blog) {
      return NextResponse.json(
        { success: false, message: "Blog not found" },
        { status: 404 }
      );
    }

    // Only delete image if it is stored locally
    if (blog.image && !blog.image.startsWith("http")) {
      const imagePath = path.join(process.cwd(), "public", blog.image);
      try {
        await fs.unlink(imagePath);
        console.log("Image deleted:", blog.image);
      } catch (err) {
        console.warn("Image file not found or already deleted:", blog.image);
      }
    }

    return NextResponse.json({
      success: true,
      message: "Blog and image deleted successfully!",
    });
  } catch (error) {
    console.error("DELETE error:", error);
    return NextResponse.json(
      { success: false, error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
