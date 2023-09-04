
import { allNotes } from 'contentlayer/generated'
import { useEffect, useState } from 'react'
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
    // const [sortedNotes, setSortedNotes] = useState(note);

    // useEffect(() => {
    //     setSortedNotes(note);
    // }, [note]);
    // console.log('노트', note)
    return <BlogLayout post={note} />
}

export default PostPage