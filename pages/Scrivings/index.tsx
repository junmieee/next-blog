import { allBlogs, allNotes } from 'contentlayer/generated'
import { useMDXComponent } from 'next-contentlayer/hooks'
import Title from '../../components/Title';
import { allScrivTags, allNotesPosts } from '../../constants/dataset'
import Tag from '../../components/Tag';
import BlogCard from '../../components/BlogCard';
// const allSeriesName = allBlogs
//     .map((post) => post.slug);
import { motion } from 'framer-motion'
import { popUp, FadeContainer } from '../../lib/animtaion'
import MovingCard from 'components/MovingCard';
import { useState } from 'react';
import Divider from 'components/divider'


export const allSeriesName = allNotes
    .map((blog) => blog.url_path
        .split('/')[1]);



export default function Note({ }) {
    // console.log('allNotes', allNotes)
    const [selectedTag, setSelectedTag] = useState(null);

    const onTagClick = (tag) => {
        if (selectedTag === tag) {
            setSelectedTag(null);
        } else {
            setSelectedTag(tag);
        }
    };

    const filteredNotes = selectedTag
        ? allNotesPosts.filter((note) => note.tags.includes(selectedTag))
        : allNotesPosts;

    console.log('filteredNotes', filteredNotes)

    return (
        <>
            <div className='flex items-end'>
                <Title title="Scrivings" />
            </div>
            {/* <h1 className="item-start text-lg font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-3xl md:leading-14">
                <span className="ml-2 text-sm">{filteredNotes.length}개의 Scrivings</span>
            </h1> */}
            <div className="mt-6 flex flex-wrap gap-2 py-4">
                <Tag tag="All" onClick={() => setSelectedTag(null)} />
                {allScrivTags.map((tag, i) => (
                    <Tag key={i} tag={tag} onClick={() => onTagClick(tag)}>{tag}</Tag>
                ))}
            </div>
            <Divider />
            <motion.div
                initial="hidden"
                whileInView="visible"
                variants={FadeContainer}
                viewport={{ once: true }}
                className="my-10 grid grid-cols-2 gap-4 mt-14 "
            >
                {filteredNotes.map((post, idx) => {
                    return (
                        <>
                            <motion.div
                                variants={popUp}
                                // initial="hidden"
                                // whileInView="visible"
                                // key={idx}
                                // whileTap="tap"
                                className=" hover:drop-shadow-basic  dark:bg-darkPrimary group rounded-2xl flex origin-center transform items-center justify-center gap-4 rounded-sm border border-gray-300 p-4 dark:border-neutral-700 hover:dark:bg-darkSecondary sm:justify-start md:origin-top"
                            >
                                <div className="relative transition group-hover:scale-110 sm:group-hover:scale-100">
                                    {post.title}
                                </div>
                                <p className=" select-none text-sm font-semibold sm:inline-flex md:text-base">
                                    {/* {post.tags} */}
                                </p>
                            </motion.div>
                        </>
                    )
                })}
            </motion.div>
        </>

    )
}