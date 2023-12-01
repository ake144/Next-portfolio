'use client'
import React from 'react';
import Link from 'next/link';
import { Tilt } from 'react-tilt';
import prisma from '../db';
import { GetServerSideProps } from 'next';

type PostProps = {
  title: string;
  image: string;
  link: string;
  description: string;
};

type Props = {
  posts: PostProps[];
};

const  ShowPosts=async()=>{
  
const posts = await prisma.blogPosts.findMany()
console.log(ShowPosts)
  return (
    <div className='bg-slate-700' id="blog">
     <Link href={{ pathname: `/blog/add` }}>
        <p className="text-white bg-yellow-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800">
          Add a Post
        </p>
      </Link>

      <div className="min-w-screen grid grid-cols-3 my-20 gap-6">
        {posts?.map((post:any) => (
            <div key={post.id}>
           <Tilt>
            <h4 className='text-sky-100'>hello</h4>
            <Link href={{ pathname: `/blog/${post.id}` }}>
                <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {post.topic} <br />
                    <img
                      className="w-full h-64 object-cover"
                      src={post.image}
                      alt={`${post.topic}`}
                    />
                    <a className="font-light text-sm text-yellow-600 text-3" href={post.link}>
                      {post.link}
                    </a>
                  </h5>
                  <Link href={`/blog/${post.id}`}>
                    < div  className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                      Read more
                      <svg
                        className="w-3.5 h-3.5 ml-2"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 14 10"
                      >
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M1 5h12m0 0L9 1m4 4L9 9"
                        />
                      </svg>
                    </div>
                  </Link>
                </div>
              
            </Link>
            </Tilt>
          </div >
          
        ))}
      </div>
    </div>
  );
};

export default ShowPosts;
