export const metadata = {
  title: 'Changelog',
  description: 'Page description',
};

import Cta from '@/components/cta-03';
import Illustration from '@/public/images/page-illustration.svg';
import { allUpdates } from 'contentlayer/generated';
import Image from 'next/image';
import PostItem from './post-item';

export default function Changelog() {
  // Sort posts by date
  allUpdates.sort((a, b) => {
    return new Date(a.publishedAt) > new Date(b.publishedAt) ? -1 : 1;
  });

  return (
    <>
      {/* Content */}
      <section className="relative">
        {/* Radial gradient */}
        <div
          className="pointer-events-none absolute left-1/2 top-0 -z-10 flex aspect-square w-[800px] -translate-x-1/2 -translate-y-1/2 items-center justify-center"
          aria-hidden="true"
        >
          <div className="translate-z-0 absolute inset-0 rounded-full bg-purple-500 opacity-30 blur-[120px]"></div>
          <div className="translate-z-0 absolute h-64 w-64 rounded-full bg-purple-400 opacity-70 blur-[80px]"></div>
        </div>

        {/* Particles animation */}
        <div className="absolute inset-0 -z-10 h-96" aria-hidden="true">
          <canvas data-particle-animation data-particle-quantity="15"></canvas>
        </div>

        {/* Illustration */}
        <div
          className="pointer-events-none absolute left-1/2 -z-10 -mt-16 -translate-x-1/2 opacity-90 blur-2xl md:block"
          aria-hidden="true"
        >
          <Image
            src={Illustration}
            className="max-w-none"
            width={1440}
            height={427}
            alt="Page Illustration"
          />
        </div>

        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="pb-12 pt-32 md:pb-20 md:pt-40">
            {/* Page header */}
            <div className="pb-12 text-center md:pb-20">
              <h1 className="h1 bg-gradient-to-r from-slate-200/60 via-slate-200 to-slate-200/60 bg-clip-text pb-4 text-transparent">
                What's New
              </h1>
              <div className="mx-auto max-w-3xl">
                <p className="text-lg text-slate-400">
                  New updates and improvements to Stellar.
                </p>
              </div>
            </div>

            {/* Content */}
            <div className="mx-auto max-w-3xl">
              <div className="relative">
                <div
                  className="absolute left-[2px] top-4 -z-10 h-full w-0.5 overflow-hidden bg-slate-800 [mask-image:_linear-gradient(0deg,transparent,theme(colors.white)_150px,theme(colors.white))] after:absolute after:left-0 after:top-0 after:h-4 after:w-0.5 after:-translate-y-full after:animate-shine after:bg-[linear-gradient(180deg,_transparent,_theme(colors.purple.500/.65)_25%,_theme(colors.purple.200)_50%,_theme(colors.purple.500/.65)_75%,_transparent)]"
                  aria-hidden="true"
                ></div>
                {allUpdates.map((post, postIndex) => (
                  <PostItem key={postIndex} {...post} />
                ))}
              </div>
            </div>

            {/* Pagination */}
            <div className="mx-auto max-w-3xl">
              <ul className="mt-12 flex items-center justify-between pl-8 md:pl-48">
                <li>
                  <span className="btn-sm group relative cursor-not-allowed text-slate-700 transition duration-150 ease-in-out [background:linear-gradient(theme(colors.slate.900),_theme(colors.slate.900))_padding-box,_conic-gradient(theme(colors.slate.400),_theme(colors.slate.700)_25%,_theme(colors.slate.700)_75%,_theme(colors.slate.400)_100%)_border-box] before:pointer-events-none before:absolute before:inset-0 before:rounded-full before:bg-slate-800/30">
                    <span className="relative inline-flex items-center">
                      <span className="mr-1 tracking-normal text-slate-700">
                        &lt;-
                      </span>{' '}
                      Previous Page
                    </span>
                  </span>
                </li>
                <li>
                  <a
                    className="btn-sm group relative text-slate-300 transition duration-150 ease-in-out [background:linear-gradient(theme(colors.slate.900),_theme(colors.slate.900))_padding-box,_conic-gradient(theme(colors.slate.400),_theme(colors.slate.700)_25%,_theme(colors.slate.700)_75%,_theme(colors.slate.400)_100%)_border-box] before:pointer-events-none before:absolute before:inset-0 before:rounded-full before:bg-slate-800/30 hover:text-white"
                    href="#0"
                  >
                    <span className="relative inline-flex items-center">
                      Next Page{' '}
                      <span className="ml-1 tracking-normal text-purple-500 transition-transform duration-150 ease-in-out group-hover:translate-x-0.5">
                        -&gt;
                      </span>
                    </span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <Cta />
    </>
  );
}
