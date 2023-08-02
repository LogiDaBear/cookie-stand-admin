# *cookie-stand-admin*
### Author: *Logan Reese*


**VERY IMPORTANT INSTALL STEPS TO REPLICATE:**
![install tailwind](install.png)

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.


# **Pat's Salmon Cookies:**
## Feature Tasks and Requirements
Your job is to create a Cookie Stand Admin app using [Next.js](https://nextjs.org/) and style using [Tailwind CSS](https://tailwindcss.com/).
- The spec for lab is screen shot of Cookie Stand Admin Version 1
pages/Index.js should…
```
    - Have <Head> component with page title set to Cookie Stand Admin
    - Have a <header> component that matches spec.
    - Have a <main> component containing <form> and    a placeholder component showing JSON string of last created Cookie Stand.
    - Have a <footer> component that matches spec.
    - Style app using TailwindCSS utility classes.
```
## Implementing
Follow [Install Tailwind CSS with Next.js](https://tailwindcss.com/docs/guides/nextjs) steps
- NOTE: There are a couple small differences between Tailwind’s directions and the way we’ll be running things:
- name your app cookie-stand-admin instead of my-project
- use --javascript flag instead of --typescript
- E.g. npx create-next-app@latest cookie-stand-admin --javascript --eslint
- choose no or the default for remaining options.

Strip out unused files
Won’t break if they get left in, but a good practice to remove stuff you’re not using.

[pro tip](https://marketplace.visualstudio.com/items?itemName=andrewmcodes.tailwindcss-extension-pack)

## configuration
Create cookie-stand-admin repository in Github

Use the folder created by create-next-app as the root of your project’s git repository.

## collaborators
class of 401d22

[bard](https://bard.google.com/)