// pages/index.js

import Head from 'next/head'
import BlogCard from '../../components/BlogCard'
import { useEffect, useState } from 'react'
import { motion } from 'framer-motion';
// import { allBlogTags, allBlogPosts } from '../../constants/dataset'
import Tag from '../../components/Tag';
import Divider from '../../components/divider';
import Title from '../../components/Title';
import { popUp, FadeContainer, staggerHalf, fadeInUp, fadeIn } from '../../lib/animtaion'
import { allBlogs } from 'contentlayer/generated'


// export async function getStaticProps() {
//     const posts = allBlogPosts
//     return {
//         props: {
//             posts
//         }
//     }
// }


// export const getStaticProps = async () => {
//     const posts = allBlogs.sort((a, b) => Number(new Date(b.date)) - Number(new Date(a.date)))
//     return {
//         props: {
//             posts,
//         },
//     }
// }

export const getStaticProps = async () => {
    const posts = allBlogs
    return {
        props: {
            posts,
        },
    }
}

export default function Blog({ posts }) {

    const [searchValue, setSearchValue] = useState('')
    const [selectedTag, setSelectedTag] = useState(null);
    const [sortedPosts, setSortedPosts] = useState([]);

    useEffect(() => {
        // const sorted = [...posts].sort((a, b) => b.dateValue - a.dateValue);
        const sorted = posts.sort((a, b) => Number(new Date(b.date)) - Number(new Date(a.date)))
        setSortedPosts(sorted);
    }, [posts]);


    const filteredSearchPosts = sortedPosts.filter((p) => {
        const searchContent = p.title
        return searchContent.toLowerCase().includes(searchValue.toLowerCase())
    });

    const onTagClick = (tag) => {
        if (selectedTag === tag) {
            setSelectedTag(null);
        } else {
            setSelectedTag(tag);
        }
        setSearchValue('');
    };

    const filteredPosts = filteredSearchPosts.filter((post) => {
        if (selectedTag === null) {
            return true;
        } else {
            return post.tags.includes(selectedTag);
        }
    });

    // console.log('allNotes', allNotes)

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
                            className="flex item-start w-full rounded-full border border-gray-300 bg-gray-100 px-4 py-2 text-gray-900 focus:border-red-100  focus:ring-2 focus:ring-red-100   dark:border-gray-900 dark:bg-gray-500/20 dark:border-gray-500 dark:text-gray-100"
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
                        {/* <div className='mb-4 mt-8 text-3xl font-extrabold tracking-tight sm:text-5xl text-gray-900 dark:text-gray-100'>
                            Tags<span className="ml-2 text-sm">({allTags.length})</span>
                        </div> */}
                        <div className="mt-4 flex flex-wrap gap-2">
                            <Tag tag="All" onClick={() => setSelectedTag(null)} selected={selectedTag === null} />
                            {allBlogTags.map((tag, i) => (
                                <Tag key={i} tag={tag} onClick={() => onTagClick(tag)} selected={selectedTag === tag} />
                            ))}
                        </div>
                    </motion.div>
                    <Divider />

                </div>
                <h1 className="item-start text-lg font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-3xl md:leading-14">
                    All Posts
                    {/* <span className="ml-2 text-sm">({filteredPosts.length})</span> */}
                </h1>
                {filteredPosts.map((post, idx) => (
                    <motion.div key={post.slug}>
                        <motion.div
                            variants={fadeInUp}
                            initial="initial"
                            whileInView="animate"
                            exit="exit"
                            viewport={{ amount: 0.9, once: true }}>
                            <BlogCard key={idx} {...post} />
                        </motion.div>
                    </motion.div>
                ))}


            </div>
        </>
    )
}