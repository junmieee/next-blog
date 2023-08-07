// pages/index.js

import Head from 'next/head'
import BlogCard from '../../components/BlogCard'
import { useState } from 'react'
import { getSortedPostsData } from '../../lib/posts'
import { motion } from 'framer-motion';
import { allTags } from '../../constants/dataset'
import Tag from '../../components/Tag';
import Divider from '../../components/divider';
import Title from '../../components/Title';


export async function getStaticProps() {
    const posts = getSortedPostsData()
    return {
        props: {
            posts
        }
    }
}


export default function Blog({ posts }) {
    console.log('posts', posts)
    const [searchValue, setSearchValue] = useState('')
    const filteredPosts = posts.filter((p) => {
        const searchContent = p.title
        return searchContent.toLowerCase().includes(searchValue.toLowerCase())
    })
    const displayPosts = !searchValue ? posts : filteredPosts

    return (
        <>
            <Head>
                <title>Chloe's Blog</title>
            </Head>
            <div >

                <div className="space-y-2 pt-6 pb-8 md:space-y-5">
                    <Title title="Blog" />
                    <div className="relative max-w-lg">
                        <input
                            aria-label="Search articles"
                            type="text"
                            onChange={(e) => setSearchValue(e.target.value)}
                            placeholder="Search posts..."
                            className="flex item-start w-full rounded-full border border-gray-300 bg-gray-100	 px-4 py-2 text-gray-900 focus:border-red-100 focus:ring-red-100 dark:border-gray-900 dark:bg-gray-500/20 dark:border-gray-500 dark:text-gray-100"
                        />
                        <svg
                            className="absolute right-3 top-3 h-5 w-5 text-gray-400 dark:text-gray-300"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                            />
                        </svg>
                    </div>
                    <motion.div className="mt-14" >
                        <div className='mb-4 mt-8 text-3xl font-extrabold tracking-tight sm:text-5xl text-gray-900 dark:text-gray-100'>
                            Tags<span className="ml-2 text-sm">({allTags.length})</span>
                        </div>
                        <div className="mt-4 flex flex-wrap gap-2">
                            {allTags.map((tag, i) => (
                                <Tag key={i} tag={tag}>{tag}</Tag>
                            ))}
                        </div>
                    </motion.div>
                    <Divider />

                </div>
                <h1 className="item-start text-lg font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-3xl md:leading-14">
                    All Posts <span className="ml-2 text-sm">({posts.length})</span>
                </h1>
                {displayPosts.map((post, idx) => (
                    <BlogCard key={idx} {...post} />
                ))}

            </div>
        </>
    )
}