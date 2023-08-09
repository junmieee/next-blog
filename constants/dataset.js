import { allBlogs, allNotes } from 'contentlayer/generated';


export const allSeriesName = allBlogs
    .map((post) => post.slug.split('/')[0]);


export const allBlogPosts = allBlogs
    // .filter(isBlogPost)
    .map((post) => ({
        ...post,
    }))
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());


export const allNotesPosts = allNotes.map((note) => ({
    ...note,
})).sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());



export const allBlogTags = Array.from(
    allBlogPosts.reduce((ac, v) => {
        v.tags.forEach((tag) => ac.add(tag));
        return ac;
    }, new Set())
)


export const allScrivTags = Array.from(
    allNotesPosts.reduce((ac, v) => {
        v.tags.forEach((tag) => ac.add(tag));
        return ac;
    }, new Set())
)



export const reducePost = ({ body: _, _raw, _id, ...post }) => post;
