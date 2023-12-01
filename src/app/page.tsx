import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        {/* Header */}
        <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
          
          {/* Logo */}
          <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
            <a
              className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
              href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              By{' '}
              <Image
                src="/logo.png"
                alt="Akeja"
                className="dark:invert"
                width={170}
                height={30}
                priority
              />
            </a>
          </div>
        </div>

        {/* Main content */}
        <div className="relative flex place-items-center ...">
          {/* Profile */}
          <div className="absolute bottom-auto right-0">
            <div className="py-8 px-9 mx-auto max-w-sm rounded-lg sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6">
              <img className="h-24 mx-auto sm:flex-shrink-0 sm:m-0 rounded-full" src='./man.png.png' alt="Akeja" />
              <div className="text-center font-light space-y-2 sm:text-left">
                <div className="space-y-0.5 ">
                  <p className="flex flex-row text-7xl text-bold my-4 text-sky-100">
                    Aklilu Tamirat
                  </p>
                  <p className="text-medium text my-4 text-white">
                    Full stack web developer
                  </p>
                </div>

            </div>
            <div className='flex flex-row m-4 p-7'>
         <div>
                <Link href='/contact'>
                  <button className="px-4 py-2 my-5 text-sm text-violet rounded-full border hover:border-transparent focus:outline-none focus:ring-violet-500 hover:text-lg hover:text-white hover:bg-purple-700 focus:ring-offset-2 font-">
                    PING ME
                  </button>
                </Link>
              </div>
            </div>

            {/* Resume link */}
            <a href='/cv.pdf' target='_blank'>
              <div className='flex'>
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
                <p>RESUME</p>
              </div>
            </a>
        </div>
          </div>
        </div>

         {/* Contact button */}
        
      
        {/* Grid section */}
        <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
          {/* Add your grid content here */}
        </div>
      </main>
    </>
  );
}




