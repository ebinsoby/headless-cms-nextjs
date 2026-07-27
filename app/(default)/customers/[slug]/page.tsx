export const metadata = {
  title: 'Customer Post',
  description: 'Page description',
};

import Particles from '@/components/particles';
import { getContentForCustomerPost, getSlugsForPosts } from '@/content/queries';
import CustomerBadge from '@/public/images/customer-badge.svg';
import Illustration from '@/public/images/page-illustration.svg';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import RelatedPosts from './related-posts';

export const generateStaticParams = async () => {
  const data = await getSlugsForPosts();
  return data.customerPostCollection.items;
};

export default async function CustomerSingle({ params }) {
  const data = await getContentForCustomerPost(params.slug);
  const content = data.customerPostCollection.items[0];
  if (!content) {
    notFound();
  }
  return (
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
      <Particles className="absolute inset-0 -z-10 h-96" quantity={15} />

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
        <div className="border-b pt-32 [border-image:linear-gradient(to_right,transparent,theme(colors.slate.800),transparent)1] md:pt-40">
          <div className="md:flex md:justify-between">
            {/* Page content */}
            <div className="pb-12 md:grow md:pb-20">
              <div className="max-w-3xl">
                <article className="mb-12 border-b pb-12 [border-image:linear-gradient(to_right,transparent,theme(colors.slate.800),transparent)1]">
                  <div className="mb-4">
                    <Link
                      className="group inline-flex text-sm font-medium text-purple-500"
                      href="/customers"
                    >
                      <span className="mr-1 tracking-normal transition-transform duration-150 ease-in-out group-hover:-translate-x-0.5">
                        &lt;-
                      </span>{' '}
                      Go Back
                    </Link>
                  </div>

                  <header>
                    <h1 className="h2 inline-flex bg-gradient-to-r from-slate-200/60 via-slate-200 to-slate-200/60 bg-clip-text pb-4 text-transparent">
                      {content.title}
                    </h1>
                    <div className="mb-8 flex items-center space-x-4 text-sm">
                      <img
                        className="rounded-full"
                        src="https://gravatar.com/avatar/7b74b3bd280928b0638cdd1b3b1b40ac?size=200"
                        width="32"
                        height="32"
                        alt="Ebin Soby"
                      />
                      <div>
                        <div className="font-medium text-slate-300">
                          Ebin Soby
                        </div>
                        <div className="text-slate-500">
                          Senior Software Engineer
                        </div>
                      </div>
                    </div>
                  </header>

                  {/* Post content */}
                  <div className="prose max-w-none text-slate-400 prose-headings:text-slate-50 prose-h2:mb-4 prose-h2:mt-8 prose-h2:text-xl prose-p:leading-relaxed prose-a:text-purple-500 prose-a:no-underline hover:prose-a:underline prose-blockquote:border-l-2 prose-blockquote:border-purple-500 prose-blockquote:pl-5 prose-blockquote:font-medium prose-blockquote:italic prose-blockquote:text-slate-300 prose-strong:font-medium prose-strong:text-slate-50 prose-blockquote:xl:-ml-5">
                    {documentToReactComponents(content.body.json)}
                  </div>
                </article>

                <RelatedPosts />
              </div>
            </div>

            {/* Sidebar */}
            <aside className="pb-12 md:w-64 md:shrink-0 md:pb-20 md:pt-[3.75rem] lg:w-80 lg:pt-0">
              <div className="sticky top-6 md:pl-6 lg:pl-10">
                {/* Sidebar content */}
                <div className="space-y-6">
                  {/* Widget */}
                  <div className="rounded-3xl border border-slate-800 bg-gradient-to-tr from-slate-800 to-slate-800/25">
                    <div className="px-5 py-6">
                      <div className="mb-5">
                        <div className="flex items-center space-x-4">
                          <Image
                            src={CustomerBadge}
                            width={64}
                            height={64}
                            alt="Customer badge"
                          />
                          <div className="text-lg font-semibold text-slate-100">
                            {content.customer.name}
                          </div>
                        </div>
                      </div>
                      <ul className="text-sm">
                        <li className="flex items-center justify-between space-x-2 border-t py-3 [border-image:linear-gradient(to_right,theme(colors.slate.700/.3),theme(colors.slate.700),theme(colors.slate.700/.3))1]">
                          <span className="text-slate-400">Location</span>
                          <span className="font-medium text-slate-300">
                            San Francisco
                          </span>
                        </li>
                        <li className="flex items-center justify-between space-x-2 border-t py-3 [border-image:linear-gradient(to_right,theme(colors.slate.700/.3),theme(colors.slate.700),theme(colors.slate.700/.3))1]">
                          <span className="text-slate-400">Website</span>
                          <a
                            className="flex items-center space-x-1 font-medium text-purple-500"
                            href="#0"
                          >
                            <span>airbnb.com</span>
                            <svg
                              className="fill-current"
                              xmlns="http://www.w3.org/2000/svg"
                              width="9"
                              height="9"
                            >
                              <path d="m1.285 8.514-.909-.915 5.513-5.523H1.663l.01-1.258h6.389v6.394H6.794l.01-4.226z" />
                            </svg>
                          </a>
                        </li>
                        <li className="flex items-center justify-between space-x-2 border-t py-3 [border-image:linear-gradient(to_right,theme(colors.slate.700/.3),theme(colors.slate.700),theme(colors.slate.700/.3))1]">
                          <span className="text-slate-400">Industry</span>
                          <span className="font-medium text-slate-300">
                            Hospitality
                          </span>
                        </li>
                        <li className="flex items-center justify-between space-x-2 border-t py-3 [border-image:linear-gradient(to_right,theme(colors.slate.700/.3),theme(colors.slate.700),theme(colors.slate.700/.3))1]">
                          <span className="text-slate-400">Product</span>
                          <span className="font-medium text-slate-300">
                            Stellar X
                          </span>
                        </li>
                        <li className="flex items-center justify-between space-x-2 border-t py-3 [border-image:linear-gradient(to_right,theme(colors.slate.700/.3),theme(colors.slate.700),theme(colors.slate.700/.3))1]">
                          <span className="text-slate-400">Impact</span>
                          <span className="font-medium text-slate-300">
                            +7% new hosts
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </section>
  );
}
