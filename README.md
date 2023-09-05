This is a BTCTurk News App [Next.js] project.
## What does this project do?

In this project, you can view news with 2 different API requests. You can view only news with EN language on the homepage via newsapi.org /v2/sources..

You can filter for categories of news on the homepage. `/` 

On the Category page, you can view news of v2/top-headlines content. There is a visual, title and description of the content. `/category` 

You can view whether you have read the news content on the detail page of the category and news content.

When you click on the news content, you can go to the detail page of the relevant news. `/category/detail` 

The url extension of the relevant news is made through the author. For example `/category/detail/?author={Mehmet-Selim-Turan}`

## Getting Started

First, install the node modules

```bash
npm i
```

and run the development server:

```bash
npm run dev
```

## Tech Stack

next: "13.4.19",
react: "18.2.0",
react-redux": "^8.1.2",
sass: "^1.66.1",
swiper: "^10.2.0",
typescript: "5.2.2"

## Folder Structure

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`, `app/category/page.tsx` and `app/category/detail/page.tsx`. The page auto-updates as you edit the file.

You can edit Components `/components/`

You can edit Utils and Common files `/utils/` and `/common/`

You can edit State Managment (Redux-Toolkit) `/redux/`, `/redux/store.ts` and `/redux/readSlice.ts` 

You can edit Container `/layout/container.tsx` also u can edit container SCSS file `/layout/styles/layout.scss`

You can edit Global CSS, variables and mixin SCSS files `app/styles`

You can edit Component SCSS files `/components/{componentname}/index.scss`

You can see Types files `/types` 

<!-- ## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details. -->
