import { allBlogs } from 'contentlayer/generated';


export const allSeriesName = allBlogs
    // .filter((post) => post._raw.sourceFilePath.includes('/index.mdx'))
    .map((post) => post.slug.split('/')[0]);

export const allBlogPosts = allBlogs
    // .filter(isBlogPost)
    .map((post) => ({
        ...post,
        seriesName: allSeriesName.find((seriesName) => post.slug.includes(seriesName)) ?? null,
    }))
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());


export const allTags = Array.from(
    allBlogPosts.reduce((ac, v) => {
        v.tags.forEach((tag) => ac.add(tag));
        return ac;
    }, new Set())
).filter(Boolean);


export const reducePost = ({ body: _, _raw, _id, ...post }) => post;
