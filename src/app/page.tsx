import Image from 'next/image';
import Link from 'next/link';
import Footer from './(component)/footer/page';

export default function Home() {
  return (
    <>
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        {/* Your content here */}
      </div>
  
      <div className="relative flex flex-col items-center justify-center w-full">
        <img className="h-24 mx-auto sm:flex-shrink-0 sm:m-0 rounded-full" src="./man.png.png" alt="Akeja" />
        <div className="text-center font-light space-y-4">
          <div className="space-y-2">
          <h2>Aklilu Tamirat</h2>
          <p> Passionate <span className='text-1xl text-slate-400 font-sm fon'> web developer 
          </span> <br/>crafting digital experiences with innovation and precision</p>
          </div>
          <div className="flex flex-row m-4 p-7 my-7 justify-center">
            <div>
              <Link href="/contact">
                <button className="px-4 py-2 my-5 text-sm text-violet rounded-full border hover:border-transparent focus:outline-none focus:ring-violet-500 hover:text-lg hover:text-white hover:bg-purple-700 focus:ring-offset-2 font-">
                  PING ME
                </button>
              </Link>
            </div>
  
            <a href="/cv.pdf" target="_blank" className="ml-4 flex items-center text-violet">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                <line x1="12" y1="8" x2="12" y2="16" />
                <line x1="8" y1="12" x2="16" y2="12" />
              </svg>
              <p className="ml-2">RESUME</p>
            </a>
          </div>
        </div>
      </div>
    </main>
  </>
  
  );
}




