import { allBlogs } from 'contentlayer/generated'
import { useEffect, useState } from 'react'
import BlogLayout from '../../layouts/BlogLayout'



export const getStaticPaths = async () => {
    return {
        paths: allBlogs.map(p => ({ params: { slug: p.slug } })),
        fallback: false,
    }
}

export const getStaticProps = async ({ params }) => {
    const post = allBlogs.find(p => p.slug === params.slug)

    return {
        props: {
            post,
        },
    }
}


const PostPage = ({ post }) => {

    return <BlogLayout post={post} />
}

export default PostPage