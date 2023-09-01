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
    const [sortedPosts, setSortedPosts] = useState(post);

    useEffect(() => {
        setSortedPosts(sortedPosts);
    }, [post]);

    console.log('포스트', post)
    return <BlogLayout post={sortedPosts} />
}

export default PostPage