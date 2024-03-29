import { allSeriesName, allBlogPosts, allBlogTags, reducePost } from '../../../constants/dataset'
// import { fadeIn, fadeInUp } from '../../../constants/animation'
import { motion } from 'framer-motion'
import PostListItem from '../../../components/PostListItem';
import Divider from '../../../components/divider';
import { fadeIn, fadeInUp } from '../../../lib/animtaion';
import { useEffect, useState } from 'react';



export const getStaticPaths = () => {
    return {
        paths: allBlogTags.map((tag) => `/blog/tags/${tag}`),
        fallback: 'blocking',
    };
};

// export const getStaticProps = ({ params }) => {
//     const tag = (params?.tag ?? '');
//     const posts = allBlogPosts.filter((post) => post.tags.includes(tag)).map(reducePost);


//     return {
//         props: { tag, posts },
//     };
// };


export const getStaticProps = ({ params }) => {

    const tag = (params?.tag ?? '');
    const posts = allBlogPosts.filter((post) => post.tags.includes(tag)).map(reducePost);

    return {
        props: { tag, posts },
    };
};


export default function Home({ tag, posts }) {

    const [sortedPosts, setSortedPosts] = useState([]);

    useEffect(() => {
        const sorted = [...posts].sort((a, b) => b.dateValue - a.dateValue);
        setSortedPosts(sorted);
    }, [posts]);


    return (
        <>
            <div className='flex mt-10 items-end text-gray-900 dark:text-gray-100 gap-4 mb-4 text-3xl font-extrabold tracking-tight sm:text-5xl'>
                Tags - {tag}
                <p className="flex text-xl font-bold">
                    ({sortedPosts.length})
                </p>
            </div>
            <Divider />
            <div className="w-full">
                {sortedPosts.map((post) => (
                    <motion.div key={post.slug} variants={fadeInUp}>
                        <motion.div variants={fadeIn} initial="initial" whileInView="animate">
                            <PostListItem post={post} tag={tag} />
                        </motion.div>
                    </motion.div>
                ))}
            </div>

        </>
    )

}







