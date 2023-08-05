import { allBlogs } from 'contentlayer/generated'


import { allSeriesName, allBlogPosts, allTags, reducePost } from '../../../constants/dataset'


export const getStaticPaths = () => {

    return {
        paths: allTags.map((tag) => `/blog/tags/${tag}`),
        fallback: 'blocking',
    };
};

export const getStaticProps = ({ params }) => {
    const tag = (params?.tag ?? '');
    const posts = allBlogPosts.filter((post) => post.tags.includes(tag)).map(reducePost);


    return {
        props: { tag, posts },
    };
};

export default function Home({ tag, posts }) {
    return (
        <>
            <div>
                {posts.map((post) => (
                    <div key={post.slug}>
                        <h2>{post.title}</h2>
                        <p>{post.description}</p>
                    </div>
                ))}
            </div>
            <div>
                {tag}
            </div>
        </>
    )

}







