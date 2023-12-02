import { NextRequest, NextResponse } from 'next/server';
import prisma from '../../db'; // Replace with your Prisma instance

// export async function GET(request: NextRequest) {
//   let status = 200;
//   let data: any;

//   try {
//     const posts = await prisma.blogPosts.findMany();

//     if (posts) {
//       // Convert BigInt types to strings or numbers in the response
//       const postsWithConvertedBigInt = posts.map((post) => ({
//         ...post,
//         id: String(post.id), // Convert BigInt 'id' to string
//         // Other conversions if needed
//       }));

//       data = postsWithConvertedBigInt;
//     }
//   } catch (error) {
//     console.error('Error fetching blog posts:', error);
//     status = 500; // Set an appropriate error status code
//     data = { error: 'Error fetching blog posts' };
//   }

//   return new NextResponse(JSON.stringify(data), { status });
// }
export async function GET(request: NextRequest) {
  let status = 200;
  let data: any;

  try {
    const posts = await prisma.blogPosts.findMany();

    if (posts) {
      const postsWithImages = await Promise.all(
        posts.map(async (post) => {
          const imageData = await prisma.blogPosts.findFirst({
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
    console.error('Error fetching blog posts:', error);
    status = 500;
    data = { error: 'Error fetching blog posts' };
  }

  return new NextResponse(JSON.stringify(data), { status });
}



export  async function POST(request: NextRequest) {
  
}