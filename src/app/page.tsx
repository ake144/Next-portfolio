import Image from 'next/image'
import Link from 'next/link'
import Router from 'next/router'
import { hrtime } from 'process'

export default function Home() {
  return (
    <>
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          welcome

        </p>
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
          <a
            className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            By{' '}
            <Image
              src="/logo.png" alt={'akeja'}
              className="dark:invert"
              width={170}
              height={30}
              priority />
          </a>
        </div>
      </div>

      <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
        {/* <Image
      className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
      src="/next.svg"
      alt="Next.js Logo"
      width={180}
      height={37}
      priority
    /> */}

        <div className="absolute bottom-auto right-0">
          <div className="py-8 px-9 mx-auto max-w-sm rounded-lg sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6">
            <img className="h-24 mx-auto sm:flex-shrink-0 sm:m-0 rounded-full" src='./man.png.png' alt="Akeja" />
            <div className="text-center font-light space-y-2 sm:text-left">
              <div className="space-y-0.5">
                <p className="text-5xl text-bold my-4 text-sky-100">
                  Aklilu Tamirat
                </p>
                <p className="text-medium text my-4 text-white">
                  Full stack web developer
                </p>
              </div>

              <button className="px-4 py-2 my-5 text-sm text-violet rounded-full border hover:border-transparent focus:outline-none focus:ring-violet-500 hover:text-lg hover:text-white hover:bg-purple-700 focus:ring-offset-2 font-"><Link href='/contact'>Contact</Link></button>
            </div>
           
          </div>
          <a
              href='/cv.pdf/> (1).pdf'>
            <div className='flex'>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                <line x1="12" y1="8" x2="12" y2="16" />
                <line x1="8" y1="12" x2="16" y2="12" />
              </svg>
              <p>resume</p>
            </div>
          </a>
          

        </div>
      </div>

<div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
  
  </div>
    </main>
  </>
  )
}
