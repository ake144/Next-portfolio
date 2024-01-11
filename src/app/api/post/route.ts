import { NextRequest, NextResponse } from 'next/server';
import prisma from "@/app/db";

export async function GET(request: NextRequest) {
  let status = 200;
  let data: any;

  try {
    const posts = await prisma.akeja_react.findMany();

    if (posts) {
      const postsWithImages = await Promise.all(
        posts.map(async (post) => {
          const imageData = await prisma.akeja_blogpost.findFirst({
            where: { id: post.id },
          });
          return {
            ...post,
            id: String(post.id),
            imageUrl: imageData?.image || null,
          };
        })
      );

      data = postsWithImages;
    }
  } catch (error) {
    console.error("Error fetching blog posts:", error);
    status = 500;
    data = { error: "Error fetching blog posts" };
  }

  return new NextResponse(JSON.stringify(data), { status });
}




export  async function POST(request: NextRequest) {
  
}