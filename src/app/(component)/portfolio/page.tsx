import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import prisma from '@/app/db';


async function  Posts() {
  
const posts = await prisma?.akeja_react?.findMany()
  return (
    <div id='works' className="w-full  rounded-lg shadow ">
      <p className='mx-10 my-16 block mb-1 font-extrabold text-lg dark:text-accent-400 capitalize'>Work</p>
     <h4 className='mx-9 text-4xl font-semibold text-slate-300'>Skills and Tools</h4>
         <div id='programming '>
           <h3 className='text-2xl mx-20 font-bold my-9'>Programming Languages</h3>
          <div className='flex flex-row  flex-wrap w-1/2 mx-20 gap-2 '>
               <button type="button"  className="w-1/4 p-4  pointer-events-none inline-block rounded bg-slate-500 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-black  transition duration-150 ease-in-out hover:bg-primary-accent-100 focus:bg-primary-accent-100 focus:outline-none focus:ring-0 active:bg-primary-accent-200 " disabled>
                          Python</button>
               <button type="button"  className="w-1/4 p-4 pointer-events-none inline-block rounded bg-slate-500 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-black  transition duration-150 ease-in-out hover:bg-primary-accent-100 focus:bg-primary-accent-100 focus:outline-none focus:ring-0 active:bg-primary-accent-200 " disabled>
                          C++</button>
              <button type="button"  className="w-1/4 p-4 pointer-events-none inline-block rounded bg-slate-500 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-black  transition duration-150 ease-in-out hover:bg-primary-accent-100 focus:bg-primary-accent-100 focus:outline-none focus:ring-0 active:bg-primary-accent-200 " disabled>
                   HTml</button>
              <button type="button"  className="w-1/4 p-4 pointer-events-none inline-block rounded bg-slate-500 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-black  transition duration-150 ease-in-out hover:bg-primary-accent-100 focus:bg-primary-accent-100 focus:outline-none focus:ring-0 active:bg-primary-accent-200 " disabled>
                          Javascript</button>
              <button type="button"  className=" w-1/4 p-4 pointer-events-none inline-block rounded bg-slate-500 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-black  transition duration-150 ease-in-out hover:bg-primary-accent-100 focus:bg-primary-accent-100 focus:outline-none focus:ring-0 active:bg-primary-accent-200 " disabled>
              typescript</button>
               <button type="button"  className="w-1/4 p-4 pointer-events-none inline-block rounded bg-slate-500 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-black  transition duration-150 ease-in-out hover:bg-primary-accent-100 focus:bg-primary-accent-100 focus:outline-none focus:ring-0 active:bg-primary-accent-200 " disabled>
              css</button>
              <button type="button"  className="w-1/4 p-4 pointer-events-none inline-block rounded bg-slate-500 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-black  transition duration-150 ease-in-out hover:bg-primary-accent-100 focus:bg-primary-accent-100 focus:outline-none focus:ring-0 active:bg-primary-accent-200 " disabled>
              sql</button>
          </div>
         </div>
        <div id='technologies'>
           <h3 className='text-2xl mx-20 p-6 font-bold'>Technologies</h3>
           <div className='flex flex-row flex-wrap w-1/2 mx-20 gap-3'>
            <button type="button"  className="w-1/4 p-4  pointer-events-none inline-block rounded bg-slate-500 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-black  transition duration-150 ease-in-out hover:bg-primary-accent-100 focus:bg-primary-accent-100 focus:outline-none focus:ring-0 active:bg-primary-accent-200 " disabled>
                            Nextjs</button>
            <button type="button"  className="w-1/4 p-4  pointer-events-none inline-block rounded bg-slate-500 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-black  transition duration-150 ease-in-out hover:bg-primary-accent-100 focus:bg-primary-accent-100 focus:outline-none focus:ring-0 active:bg-primary-accent-200 " disabled>
         -          Bootstrap</button>
             <button type="button"  className="w-1/4 p-4  pointer-events-none inline-block rounded bg-slate-500 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-black  transition duration-150 ease-in-out hover:bg-primary-accent-100 focus:bg-primary-accent-100 focus:outline-none focus:ring-0 active:bg-primary-accent-200 " disabled>
                          React</button>
            <button type="button"  className="w-1/4 p-4  pointer-events-none inline-block rounded bg-slate-500 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-black  transition duration-150 ease-in-out hover:bg-primary-accent-100 focus:bg-primary-accent-100 focus:outline-none focus:ring-0 active:bg-primary-accent-200 " disabled>
                        Tailwind Css</button>
                        <button type="button"  className="w-1/4 p-4  pointer-events-none inline-block rounded bg-slate-500 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-black  transition duration-150 ease-in-out hover:bg-primary-accent-100 focus:bg-primary-accent-100 focus:outline-none focus:ring-0 active:bg-primary-accent-200 " disabled>
                            Daisyui</button>
            <button type="button"  className="w-1/4 p-4  pointer-events-none inline-block rounded bg-slate-500 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-black  transition duration-150 ease-in-out hover:bg-primary-accent-100 focus:bg-primary-accent-100 focus:outline-none focus:ring-0 active:bg-primary-accent-200 " disabled>
         -          Nodejs</button>
             <button type="button"  className="w-1/4 p-4  pointer-events-none inline-block rounded bg-slate-500 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-black  transition duration-150 ease-in-out hover:bg-primary-accent-100 focus:bg-primary-accent-100 focus:outline-none focus:ring-0 active:bg-primary-accent-200 " disabled>
                          Material ui</button>
            <button type="button"  className="w-1/4 p-4  pointer-events-none inline-block rounded bg-slate-500 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-black  transition duration-150 ease-in-out hover:bg-primary-accent-100 focus:bg-primary-accent-100 focus:outline-none focus:ring-0 active:bg-primary-accent-200 " disabled>
                        Redux</button>
           </div>
        </div>
        <div id='serverless'>
             <h3 className='text-2xl mx-20 p-6 font-bold'>Serverless</h3>
             <div className='flex flex-row  flex-wrap w-1/2 mx-20 gap-2'>
               <button type="button"  className="w-1/4 p-4  pointer-events-none inline-block rounded bg-slate-500 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-black  transition duration-150 ease-in-out hover:bg-primary-accent-100 focus:bg-primary-accent-100 focus:outline-none focus:ring-0 active:bg-primary-accent-200 " disabled>
                            AuthO</button>
                <button type="button"  className="w-1/4 p-4  pointer-events-none inline-block rounded bg-slate-500 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-black  transition duration-150 ease-in-out hover:bg-primary-accent-100 focus:bg-primary-accent-100 focus:outline-none focus:ring-0 active:bg-primary-accent-200 " disabled>
                SupaBase  </button>
                <button type="button"  className="w-1/4 p-4  pointer-events-none inline-block rounded bg-slate-500 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-black  transition duration-150 ease-in-out hover:bg-primary-accent-100 focus:bg-primary-accent-100 focus:outline-none focus:ring-0 active:bg-primary-accent-200 " disabled>
                            Firebase</button>
                <button type="button"  className="w-1/4 p-4  pointer-events-none inline-block rounded bg-slate-500 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-black  transition duration-150 ease-in-out hover:bg-primary-accent-100 focus:bg-primary-accent-100 focus:outline-none focus:ring-0 active:bg-primary-accent-200 " disabled>
                    Prisma</button>
                

             </div>
        </div>
        <div>
           <h3 className='text-2xl mx-20 p-6 font-bold'>Database and Deployment</h3>
          <div className='flex flex-row flex-wrap w-1/2 mx-20 gap-3'>
            <button type="button"  className="w-1/4 p-4  pointer-events-none inline-block rounded bg-slate-500 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-black  transition duration-150 ease-in-out hover:bg-primary-accent-100 focus:bg-primary-accent-100 focus:outline-none focus:ring-0 active:bg-primary-accent-200 " disabled>
                          Postgresql </button>
            <button type="button"  className="w-1/4 p-4  pointer-events-none inline-block rounded bg-slate-500 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-black  transition duration-150 ease-in-out hover:bg-primary-accent-100 focus:bg-primary-accent-100 focus:outline-none focus:ring-0 active:bg-primary-accent-200 " disabled>
            Vercel</button>
            <button type="button"  className="w-1/4 p-4  pointer-events-none inline-block rounded bg-slate-500 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-black  transition duration-150 ease-in-out hover:bg-primary-accent-100 focus:bg-primary-accent-100 focus:outline-none focus:ring-0 active:bg-primary-accent-200 " disabled>
                Sql </button>
              <button type="button"  className="w-1/4 p-4  pointer-events-none inline-block rounded bg-slate-500 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-black  transition duration-150 ease-in-out hover:bg-primary-accent-100 focus:bg-primary-accent-100 focus:outline-none focus:ring-0 active:bg-primary-accent-200 " disabled>
                python Everywhere</button>
          </div>
        </div>
        <div>
           <h3 className='text-2xl mx-20 p-6 font-bold'>Softwares and Tools</h3>
          <div className='flex flex-row flex-wrap w-1/2 mx-20 gap-3'>
                 <button type="button"  className="w-1/4 p-4  pointer-events-none inline-block rounded bg-slate-500 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-black  transition duration-150 ease-in-out hover:bg-primary-accent-100 focus:bg-primary-accent-100 focus:outline-none focus:ring-0 active:bg-primary-accent-200 " disabled>
                Vscode </button>
                <button type="button"  className="w-1/4 p-4  pointer-events-none inline-block rounded bg-slate-500 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-black  transition duration-150 ease-in-out hover:bg-primary-accent-100 focus:bg-primary-accent-100 focus:outline-none focus:ring-0 active:bg-primary-accent-200 " disabled>
                Pycharm </button>
                <button type="button"  className="w-1/4 p-4  pointer-events-none inline-block rounded bg-slate-500 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-black  transition duration-150 ease-in-out hover:bg-primary-accent-100 focus:bg-primary-accent-100 focus:outline-none focus:ring-0 active:bg-primary-accent-200 " disabled>
                  Figma</button>
                <button type="button"  className="w-1/4 p-4  pointer-events-none inline-block rounded bg-slate-500 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-black  transition duration-150 ease-in-out hover:bg-primary-accent-100 focus:bg-primary-accent-100 focus:outline-none focus:ring-0 active:bg-primary-accent-200 " disabled>
                Git </button>
          </div>
        </div>
        
    <div id='project'>
      <h3  className='text-2xl mx-20 p-6 font-bold'>Projects</h3>
    <div className="grid grid-cols-2 gap-4 min-h-screen">

      <div  className='py-2 mx-10 my-5'>
        <div className="py-2 mx-12 card w-96 bg-base-100 shadow-xl">
        <a href='https://coinocrypt.com'>
        <div className="card-body">
          <h2 className="card-title">coinocrypt</h2>
          <p>wordPress website
             designed by #elementor  #smartmag </p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary font-sans">Visit site</button>
          </div>
        </div>
        </a>
     </div>
      </div>
          
      <div  className='py-2 mx-10 my-5'>
        <div className="py-2 mx-12 card w-96 bg-base-100 shadow-xl">
        <a href='https://coinged.com'>
        <div className="card-body">
          <h2 className="card-title">coinged</h2>
          <p>wordPress website
             designed by #elementor  #smartmag </p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary font-sans"><a href='https://coinocrypt.com'>Visit site</a></button>
          </div>
        </div>
        </a>
     </div>
      </div>
  
      {posts?.map((item, index) => (
        <div
          key={item.id}
        >
        <div  className='py-2 mx-10 my-5'>
        <div className="py-2 mx-12 card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">{item.name}</h2>
          <p>{item.description}</p>
          <div className="card-actions justify-end">
          <a href={item.link} className="btn btn-primary font-sans">Visit site</a>
         
          </div>
        </div>
     </div>
      </div>
        </div>
      ))}
    </div>
    </div>
  </div>
  )  }

export default Posts;