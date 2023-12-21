'use client'
import React, { Suspense, useEffect, useState } from 'react';
import Link from 'next/link';
import { Tilt } from 'react-tilt';
import Loading from './loading';
import Image from 'next/image'



type PostProps = {
  title: string;
  image: string;
  link: string;
  description: string;
};

type Props = {
  posts: PostProps[];
};


const  ShowPosts=()=>{
  const [posts, setPosts] = useState<PostProps[]>([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/post');
        const postData = await response.json();
        setPosts(postData);
        setLoading(false);
        console.log(postData);
      } catch (error) {
        console.error('Error fetching posts:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);


 
if(isLoading){
  return(
  <div className='w-screen min-h-full'>
  <p>Loading....</p>
  </div>)
}

  return (
    <div className='bg-slate-700' id="blog">
     <Link href={{ pathname: `/blog/add` }}>
     <button className="btn btn-primary font-extrabold font-serif">Add New Post</button>
      </Link>


        <Suspense fallback={<Loading />}>
      <div className="min-w-screen grid grid-cols-3 my-20 gap-6">
        {posts?.map((post:any) => (
            <div key={post.id}>
           <Tilt>
            <Link href={{ pathname: `/blog/${post.id}` }}>
                <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {post.topic} <br />
                     <img        
                      className="w-full h-64 object-cover"
                      src={"data:image/jpeg;base64,"+post.image}
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
      </Suspense>
    </div>
    
  );
};


export default ShowPosts;
