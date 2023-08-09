import { allBlogs, allNotes } from 'contentlayer/generated'
import { useMDXComponent } from 'next-contentlayer/hooks'


// const allSeriesName = allBlogs
//     .map((post) => post.slug);



export const allBlogPosts = allBlogs
    // .filter(isBlogPost)
    .map((post) => ({
        ...post,
    }))
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());


export const allSeriesName = allNotes
    .map((blog) => blog.url_path
        .split('/')[1]);

// export const getStaticPaths = async () => {
//     const paths = allNotes.map(note => ({
//         params: {
//             slug: note.pathSegments.map((i) => i.pathName),
//         },
//     }))
//     return { paths, fallback: 'blocking' }
// }

// export const getStaticProps = async ({ params }) => {
//     const pagePath = params.slug.join('/')
//     console.log('pagePath', pagePath)
//     const note = allNotes.find(
//         r => r.pathSegments.map((p, i) => p.pathName) === pagePath
//     )!
//     console.log('note', note)

//     return { props: { note } }

// }


export default function Note({ note }) {
    // const MDXComponent = useMDXComponent(note.body.code)

    // console.log('allSeriesName', allSeriesName)
    console.log('allNotes', allNotes)
    // console.log('allBlogPosts', allBlogPosts)
    // const posts = allBlogs.sort((a, b) => compareDesc(new Date(a.date), new Date(b.date)))
    // console.log('allNotes', allNotes)

    return (
        <>
            {/* <h2>{allSeriesName}</h2> */}
            <div>

            </div>


        </>

    )
}