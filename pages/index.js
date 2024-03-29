

import Head from "next/head";
import LandingPreview from "../components/LandingPreview";
// import { allBlogPosts } from "../constants/dataset";
import { Suspense, useEffect, useState } from 'react'
import { allBlogs } from 'contentlayer/generated'

// export const getStaticProps = async () => {
//   const posts = allBlogs.sort((a, b) => Number(new Date(b.date)) - Number(new Date(a.date)))
//   return {
//     props: {
//       posts,
//     },
//   }
// }


// export async function getStaticProps() {
//   const posts = getSortedPostsData()
//   return {
//     props: {
//       posts
//     }
//   }
// }


export const getStaticProps = async () => {
  const posts = allBlogs
  return {
    props: {
      posts,
    },
  }
}


// export async function getStaticProps() {
//   const posts = allBlogPosts
//   return {
//     props: {
//       posts
//     }
//   }
// }

export default function Home({ posts }) {
  const [sortedPosts, setSortedPosts] = useState([]);

  useEffect(() => {
    // const sorted = [...posts].sort((a, b) => b.dateValue - a.dateValue);
    const sorted = posts.sort((a, b) => Number(new Date(b.date)) - Number(new Date(a.date)))
    setSortedPosts(sorted);
  }, [posts]);

  return (
    <div>
      <Head>
        <title>Jem's</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <LandingPreview posts={sortedPosts} />
    </div>
  );
}