import mongoose, { Document, Model, Schema } from "mongoose";

export interface IBlog extends Document {
  title: string;
  description: string;
  category: string;
  image: string;         
  date: number;         
  author: string;
  author_img: string;   
}

const BlogSchema: Schema<IBlog> = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  date: {
    type: Number,
    default: Date.now,  
  },
  author: {
    type: String,
    required: true,
  },
  author_img: {
    type: String,
    required: true,
  },
});

export const BlogModel:Model<IBlog> = mongoose.models.Blog ||  mongoose.model("Blog", BlogSchema);
