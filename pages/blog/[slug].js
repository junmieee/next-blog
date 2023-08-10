import { allBlogs, allNotes } from 'contentlayer/generated'
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
    console.log('allNotes', allNotes)
    return <BlogLayout post={post} />
}

export default PostPage