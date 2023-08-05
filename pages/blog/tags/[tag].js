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
                        <div className='text-yellow-400 hover:drop-shadow-base hover:shadow-cyan-500/50'>{post.title}</div>
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







