'use client';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useState } from 'react';
import GradientTxt from './Reusables/GradientTxt';
export default function Header() {
  const [isNavClicked, setIsNavClicked] = useState(false);
  return (
    <header className="relative">
      <div className="container px-5 mx-auto pt-5 lg:px-20">
        <nav>
          <div className="flex items-center justify-between pb-3">
            <h2 className="text-[15px] sm:text-base md:text-[24px] font-medium lg:font-bold italic">
              {' <React'}
              <GradientTxt tagName="span" txt="Mode />." />
            </h2>
            <svg onClick={() => setIsNavClicked(!isNavClicked)} xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-list size-4 md:size-6 cursor-pointer lg:hidden" viewBox="0 0 16 16">
              <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5" />
            </svg>
            {/* nav menu desktop */}
            <div className="lg:flex hidden gap-6 font-medium xl:gap-8">
              <Link href="/" className="my-5 hover:opacity-50 transition-opacity duration-75">
                About
              </Link>
              <Link href="/" className="my-5 hover:opacity-50 transition-opacity duration-75">
                Services
              </Link>
              <Link href="/" className="my-5 hover:opacity-50 transition-opacity duration-75">
                Projects
              </Link>
              <Link href="/" className="my-5 hover:opacity-50 transition-opacity duration-75">
                Blog
              </Link>
              <Link href="/" className="flex items-center gap-3 my-5 hover:opacity-50 transition-opacity duration-75">
                <span>Book a call</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right" viewBox="0 0 16 16">
                  <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8" />
                </svg>
              </Link>
            </div>
          </div>
          {/* nav menu */}
          <motion.div
            initial={{ y: '-100%', zIndex: '-5', opacity: 0 }}
            animate={{ y: isNavClicked ? 0 : '-100%', zIndex: isNavClicked ? '500' : '-5', opacity: isNavClicked ? 100 : 0 }}
            transition={{ duration: 0.5 }}
            className="absolute left-0 w-full bg-white top-14 shadow-lg p-5 lg:hidden"
          >
            <div className="flex flex-col container px-5 mx-auto font-medium">
              <Link href="/" className="my-5 hover:opacity-50 transition-opacity duration-75">
                About
              </Link>
              <Link href="/" className="my-5 hover:opacity-50 transition-opacity duration-75">
                Services
              </Link>
              <Link href="/" className="my-5 hover:opacity-50 transition-opacity duration-75">
                Projects
              </Link>
              <Link href="/" className="my-5 hover:opacity-50 transition-opacity duration-75">
                Blog
              </Link>
              <Link href="/" className="flex items-center gap-3 my-5 hover:opacity-50 transition-opacity duration-75">
                <span>Book a call</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right" viewBox="0 0 16 16">
                  <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8" />
                </svg>
              </Link>
            </div>
          </motion.div>
        </nav>
      </div>
    </header>
  );
}