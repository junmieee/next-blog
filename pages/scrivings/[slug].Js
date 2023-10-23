
import { allNotes } from 'contentlayer/generated'
import BlogLayout from '../../layouts/BlogLayout'



export const getStaticPaths = async () => {
    return {
        paths: allNotes.map(p => ({ params: { slug: p.slug } })),
        fallback: true,
    }
}

export const getStaticProps = async ({ params }) => {
    const note = allNotes.find(p => p.slug === params.slug) || null;
    return {
        props: {
            note,
        },
    }
}


const PostPage = ({ note }) => {
    // console.log('note:', note)
    return <BlogLayout post={note} />
}

export default PostPage