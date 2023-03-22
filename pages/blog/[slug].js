import { allBlogs } from 'contentlayer/generated'
import BlogLayout from '../../layouts/BlogLayout'



export const getStaticPaths = async () => {
    return {
        paths: allBlogs.map(p => ({ params: { slug: p.url } })),
        fallback: false,
    }
}

export const getStaticProps = async ({ params }) => {
    const post = allBlogs.find(p => p.url === params.slug)
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