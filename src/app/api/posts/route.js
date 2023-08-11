import { NextResponse } from "next/server";
import connect from "@/utils/db";
import Post from "@/models/Post";

export const GET = async (request) => {
  const url = new URL(request.url);
  const uploaderEmail = url.searchParams.get("uploaderEmail");
  const category = url.searchParams.get("category");

  try {
    await connect();

    let posts;

    if (uploaderEmail) {
      posts = await Post.find({ uploaderEmail });
    } else if (category) {
      posts = await Post.find({ category });
    } else {
      posts = await Post.find();
    }

    return new NextResponse(JSON.stringify(posts), { status: 200 });
  } catch (err) {
    return new NextResponse("Database Error", { status: 500 });
  }
};

export const POST = async (request) => {
  const body = await request.json();

  const newPost = new Post(body);

  try {
    await connect();

    await newPost.save();

    return new NextResponse("Post has been created", { status: 201 });
  } catch (err) {
    return new NextResponse("Database Error", { status: 500 });
  }
};
