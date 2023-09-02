import { allNotes } from 'contentlayer/generated'
import { Suspense } from 'react'
import BlogLayout from '../../layouts/BlogLayout'



export const getStaticPaths = async () => {
    return {
        paths: allNotes.map(p => ({ params: { slug: p.slug } })),
        fallback: false,
    }
}

export const getStaticProps = async ({ params }) => {
    const note = allNotes.find(p => p.slug === params.slug)
    return {
        props: {
            note,
        },
    }
}


const PostPage = ({ note }) => {
    return (
        <Suspense>
            <BlogLayout post={note} />
        </Suspense>
    )
}

export default PostPage