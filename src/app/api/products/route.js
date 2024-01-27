import mongoose from "mongoose";
import { NextResponse } from "next/server";
import { Product } from "@/model/product";

export async function GET() {
  let data = [];

  try {
    await mongoose.connect(MONGODB_URI);
    data = await Product.find();
    console.log(data);
  } catch (error) {
    console.error("Error connecting to the database:", error);
    data = { success: false };
  } finally {
    // Close the connection after querying
    await mongoose.connection.close();
  }

  return NextResponse.json({ Result: data, success: true });
}

export async function POST(request){
  const payload = await request.json();
  await mongoose.connect(MONGODB_URI);
  let product = new Product(payload)
  const result = await product.save();
  return NextResponse.json({result, success: true})
}