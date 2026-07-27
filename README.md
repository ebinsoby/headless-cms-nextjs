# CMS Learning Lab — Contentful + Next.js

A personal learning project I built to get hands-on experience integrating a
**headless CMS (Contentful)** with a modern **Next.js** front end.

I already had production experience with an in-house CMS, and I wanted to
deepen my understanding of how a third-party, API-driven headless CMS fits into
a Next.js application. So I built this site end to end: modeling content in
Contentful, querying it over the GraphQL Content API, and rendering it with the
Next.js App Router, React Server Components, and TypeScript.

## What I set out to learn

- Designing **content models** in Contentful (Hero, Navigation, Customer, Customer Post, Button component)
- Fetching content with the **Contentful GraphQL Content API** from server components
- Rendering Contentful **rich text** with `@contentful/rich-text-react-renderer`
- Driving reusable UI components (hero, nav, logo wall, customer stories) from CMS data
- Structuring a **Next.js App Router** project with route groups and typed queries
- Handling images, environment-based access tokens, and preview vs. published content

## Tech stack

- **Next.js** (App Router) + **React** + **TypeScript**
- **Contentful** headless CMS (GraphQL Content API)
- **Tailwind CSS** for styling
- Deployed on **Vercel**

## Content modeling in Contentful

Content is authored in Contentful and pulled into the app at request time. The
main content types are:

| Content type       | Purpose                                        |
| ------------------ | ---------------------------------------------- |
| `Hero`             | Landing hero: pre-title, title, subtitle, CTAs |
| `Navigation`       | Header nav menu with labels + links            |
| `Customer`         | Customer/brand with name and logo asset        |
| `Customer Post`    | Case-study style post with rich text body      |
| `Button component` | Reusable button with label + href              |

GraphQL queries for each type live in `content/queries.ts`, and the low-level
fetcher lives in `content/fetch.ts`.

## Getting started

Create a `.env.local` with your Contentful credentials:

```bash
CONTENTFUL_SPACE_ID=your_space_id
CONTENTFUL_ACCESS_TOKEN=your_delivery_token
CONTENTFUL_PREVIEW_ACCESS_TOKEN=your_preview_token
```

Then run the development server:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the result.

## Notes

This project started from an open-source Next.js UI template, which I then
re-wired to be **fully CMS-driven** as the vehicle for learning Contentful +
Next.js integration. The focus of the exercise was the data layer and CMS
integration rather than the visual design.
