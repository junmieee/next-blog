import { allBlogs, allNotes } from 'contentlayer/generated'
import { useMDXComponent } from 'next-contentlayer/hooks'
import Title from '../../components/Title';
import { allScrivTags, allNotesPosts } from '../../constants/dataset'
import Tag from '../../components/Tag';
import BlogCard from '../../components/BlogCard';
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



export default function Note({ note }) {
    // const MDXComponent = useMDXComponent(note.body.code)

    // console.log('allSeriesName', allSeriesName)
    // console.log('allNotes', allNotes)
    // console.log('allBlogPosts', allBlogPosts)
    // const posts = allBlogs.sort((a, b) => compareDesc(new Date(a.date), new Date(b.date)))
    // console.log('allNotes', allNotes)

    return (
        <>

            <Title title="Scrivings"></Title>
            <div className="mt-4 flex flex-wrap gap-2">
                {allScrivTags.map((tag, i) => (
                    <Tag key={i} tag={tag}>{tag}</Tag>
                ))}
            </div>
            <div>
                {allNotesPosts.map((post, idx) => (
                    <BlogCard key={idx} {...post} />
                ))}
            </div>


        </>

    )
}