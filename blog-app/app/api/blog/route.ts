// app/api/blog/route.ts
import { NextRequest, NextResponse } from "next/server";
import { BlogModel } from "@/app/lib/models/BlogModel";
import { writeFile } from "fs/promises";
import path from "path";
import { connectToMongoose } from "@/app/lib/config/db";

export async function POST(req: NextRequest) {
  try {
    await connectToMongoose();

    const formData = await req.formData();

    const title = formData.get("title") as string;
    const description = formData.get("description") as string;
    const category = formData.get("category") as string;
    const author = formData.get("author") as string;
    const author_img = formData.get("author_img") as string;
    const imageFile = formData.get("image") as File;

    if (!imageFile || typeof imageFile === "string") {
      return NextResponse.json({ error: "Image is missing" }, { status: 400 });
    }

    const bytes = await imageFile.arrayBuffer();
    const buffer = Buffer.from(bytes);

    const fileName = `${Date.now()}-${imageFile.name}`;
    const filePath = path.join(process.cwd(), "public", fileName);

    await writeFile(filePath, buffer);

    const blog = await BlogModel.create({
      title,
      description,
      category,
      image: `/${fileName}`,
      date: Date.now(),
      author,
      author_img,
    });

    return NextResponse.json({ success: true, blog });
  } catch (error) {
    console.error("POST /api/blog error:", error);
    return NextResponse.json(
      { success: false, error: "Internal Server Error" },
      { status: 500 }
    );
  }
}


export async function GET(req:Request){
  
  try{
    await connectToMongoose();
    const blogs=await BlogModel.find({});
    return Response.json({blogs,message:"All Blogs fetched Successfully!!!",success:true});
  }catch(error){
    console.log(error)
  }

}