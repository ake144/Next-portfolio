import { NextRequest, NextResponse } from 'next/server';
import prisma from '../../db'; // Replace with your Prisma instance

export async function GET(request: NextRequest) {
  const params = request.nextUrl.searchParams;
  const id = params.get('id');
  console.log('This is the ID obtained from the params:', id);

  let status = 200;
  let data: any;

  try {
    const posts = await prisma.blogPosts.findMany();
    if (posts) {
      data = posts;
    }
  } catch (error) {
    console.error('Error fetching blog posts:', error);
  }

  return new NextResponse(JSON.stringify(data), { status:201 });
}


export  async function POST(request: NextRequest) {
 

  
}