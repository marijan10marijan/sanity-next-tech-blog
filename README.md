# Next.js Blog with Sanity CMS

This project is a fully responsive blog platform built with **Next.js** (v14) and powered by **Sanity CMS** for content management. The website allows users to view blog posts, browse popular and highly-rated articles, and switch between light and dark themes that are saved based on user preferences.

## Features

- **Home Page**: The landing page displays an overview of the latest blog posts.
- **Popular Blog Slider**: A dynamic slider showcasing the most popular blog posts.
- **5-Star Blog Slider**: A slider for highly-rated blogs, featuring posts with 5-star ratings.
- **Individual Blog Pages**: Each blog post has its own dedicated page with full content details.
- **Light/Dark Theme Toggle**: Users can switch between light and dark modes, and the preference is stored locally in the browser, providing a consistent experience across visits.

## Tech Stack

- **Next.js** (v14) with **App Router** for front-end and server-side rendering (SSR).
- **Sanity.io** for content management, enabling the client to add, edit, and manage blog posts through a simple interface.
- **Tailwind CSS** for design, with responsive layouts to support all device sizes.
- **Theme Storage**: Uses browser's local storage to remember the user's theme preference.

## Project Structure

- **`src/app`**: Contains all the Next.js app pages and routes.
- **`src/components`**: Reusable React components, including sliders, buttons, etc.
- **`src/utils`**: Sanity client configuration and utility functions for interacting with the Sanity CMS.
- **`sanity` folder**: Configuration and schemas for the Sanity CMS backend.

## Sanity CMS Integration

The content is dynamically managed through Sanity CMS. All blog posts are stored in the **production dataset**, and the site fetches the data from Sanity using API calls. The CMS also allows real-time updates for new blog posts, which are reflected on the client side through webhook integration for revalidation.
