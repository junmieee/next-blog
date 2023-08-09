

import Head from "next/head";
import LandingPreview from "../components/LandingPreview";
import { allBlogs } from 'contentlayer/generated'
import { getSortedPostsData } from "../lib/posts";
// export const getStaticProps = async () => {
//   const posts = allBlogs.sort((a, b) => Number(new Date(b.date)) - Number(new Date(a.date)))
//   return {
//     props: {
//       posts,
//     },
//   }
// }


export async function getStaticProps() {
  const posts = getSortedPostsData()
  return {
    props: {
      posts
    }
  }
}

export default function Home({ posts }) {
  return (
    <div>
      <Head>
        <title>Chloe's Blog</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <LandingPreview posts={posts} />

    </div>
  );
}