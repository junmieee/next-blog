// import { allNotes, Note } from 'contentlayer/generated'
// import { useMDXComponent } from 'next-contentlayer/hooks'
// import { PathSegment, TreeNode } from '../../lib/types'
// import Title from '../../components/Title'

// export const allSeriesName = allNotes
//     .map((blog) => blog.url_path
//         .split('/')[1]);

// export const getStaticPaths = async () => {
//     const paths = allNotes.map(note => ({
//         params: {
//             slug: note.pathSegments.map((i: PathSegment) => i.pathName),
//         },
//     }))
//     return { paths, fallback: 'blocking' }
// }


// export const getStaticProps = async ({ params }) => {
//     const pagePath = params.slug.join('/')
//     console.log('pagePath', pagePath)
//     const note = allNotes.find(
//         note => note.pathSegments.map((seg: PathSegment) => seg.pathName).join('/') === pagePath
//     )
//     // const tree = buildTree(allNotes)
//     // console.log('params', params.slug)

//     return { props: { note, tree } }
// }



// export default function Notes({ note, tree }) {
//     console.log('tree', tree)
//     const MDXComponent = useMDXComponent(note.body.code)
//     // console.log('note', allNotes.find((n) => n.pathSegments.map((seg) => (seg.pathName))))

//     // console.log('allNotes', allNotes)

//     // console.log('allSeriesName', allSeriesName)
//     // console.log('allBlogs', allBlogs)
//     // console.log('allBlogPosts', allBlogPosts)
//     // const posts = allBlogs.sort((a, b) => compareDesc(new Date(a.date), new Date(b.date)))
//     // console.log('allNotes', allNotes)

//     return (
//         <>
//             {/* <h2>{allSeriesName}</h2> */}
//             {/* <div className='text-2xl'>{note.title}</div>
//             <div className='text-2xl bg-slate-500'>{note.tags.join(' ')}</div>
//             <div className='text-2xl'>{tree}</div> */}


//             <div>
//                 {/* {note} */}
//                 <MDXComponent />
//             </div>


//         </>

//     )
// }

import { allNotes } from 'contentlayer/generated'
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
    console.log('allNotes', allNotes)
    return <BlogLayout post={note} />
}

export default PostPage