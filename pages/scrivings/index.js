import Title from '../../components/Title';
import { allScrivTags, allNotesPosts } from '../../constants/dataset'
import Tag from '../../components/Tag';
import { AnimatePresence, motion } from 'framer-motion'
import { FadeContainer } from '../../lib/animtaion'
import { useState } from 'react';
import Link from 'next/link';


export default function Note() {
    const [selectedTag, setSelectedTag] = useState(null);

    const onTagClick = (tag) => {
        if (selectedTag === tag) {
            setSelectedTag(null);
        } else {
            setSelectedTag(tag);
        }
    };


    const onAllTagClick = () => {
        setSelectedTag(null);
    };

    const filteredNotes = selectedTag
        ? allNotesPosts.filter((note) => note.tags.includes(String(selectedTag)))
        : allNotesPosts;


    return (
        <>
            <div className='flex pt-6 items-end'>
                <Title title="Scrivings" />
            </div>
            {/* <h1 className="item-start text-lg font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-3xl md:leading-14">
                <span className="ml-2 text-sm">{filteredNotes.length}개의 Scrivings</span>
            </h1> */}
            <div className="mt-6 flex flex-wrap gap-2 py-4">
                <Tag tag="All" onClick={onAllTagClick} selected={selectedTag === null} />
                {allScrivTags.map((tag, i) => (
                    <Tag key={i} tag={tag} onClick={() => onTagClick(tag)} selected={selectedTag === tag} />
                ))}
            </div>
            {/* <Divider /> */}
            <motion.div
                initial="hidden"
                whileInView="visible"
                variants={FadeContainer}
                viewport={{ once: true }}
                className="my-10 grid grid-cols-2 gap-4 mt-14 "
            >

                {filteredNotes.map((note, idx) => {
                    return (
                        <>
                            <Link href={'/scrivings/' + note.slug} key={idx} >
                                <motion.div
                                    className=" hover:drop-shadow-basic dark:bg-darkPrimary rounded-2xl flex transform justify-center gap-4 rounded-sm border border-6 border-gray-300 p-4 dark:border-neutral-700 hover:dark:bg-darkSecondary "
                                >
                                    <AnimatePresence mode="wait">
                                        <div className=" transition group-hover:scale-110 sm:group-hover:scale-100 dark:text-gray-100  text-gray-600  ">
                                            <span className="ml-2 text-sm text-xl font-bold">{note.title}</span>
                                        </div>
                                        <p className=" select-none text-sm font-semibold sm:inline-flex md:text-base">
                                        </p>
                                    </AnimatePresence>
                                </motion.div>
                            </Link>
                        </>
                    )
                })}
            </motion.div>
        </>

    )
}