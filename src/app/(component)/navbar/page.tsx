'use client'
import React, { ReactElement } from 'react';
import { FaGithub } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import Link from 'next/link'
import { usePathname } from 'next/navigation'


const Navbar=()=> {
  const pathname = usePathname()
  return (
    <>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </div>
            <ul className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
              <li><a href='/'>Home</a></li>
              <li><a href='/about'>About</a></li>
              <li>
                <a>Blog</a>
                <ul className="p-2">
                  <li><a href='/blog'>Blog Posts</a></li>
                  <li><a href='/blog/add'>Add new Post</a></li>
                </ul>
              </li>
              <li><a href='/contact'>Contact</a></li>
            </ul>
          </div>
          <a href='/' className="btn btn-ghost text-xl " >AKEJA</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 ">
          <li><Link href='/' >HOME</Link></li>
            <li><Link href='/portfolio'  className={`link ${pathname === '/about' ? 'active' : ''}`} >Works</Link></li>
            <li>
              <details>
                <summary>Blog</summary>
                <ul className="p-4 m-3">
                  <li><Link href='/blog'  className={`link ${pathname === '/blog' ? 'active' : ''}`} >Blog Posts</Link></li>
                  <li><Link href='/blog/add'  className={`link ${pathname === '/blog/add' ? 'active' : ''}`} >Add Post</Link></li>
                </ul>]
              </details>
            </li>
            <li><Link href='/contact'  className={`link ${pathname === '/contact' ? 'active' : ''}`} >Contact</Link></li>
          </ul>
        </div>
        <div className="navbar-end">
          {/* <a className="btn ">Button</a> */}
          
            <a href='https://github.com/ake144/'> < FaGithub /> </a>
            <a href='https://twitter.com/AkeTamirat94397' className='m-3' > <FaTwitter /></a>
        </div>
 </div>
    </>
  );
};

export default Navbar;
