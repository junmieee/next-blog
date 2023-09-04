import Title from '../../components/Title';
// import { allNotesPosts } from '../../constants/dataset'
import Tag from '../../components/Tag';
import { AnimatePresence, motion } from 'framer-motion'
import { FadeContainer } from '../../lib/animtaion'
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { allNotes } from 'contentlayer/generated';
import { allScrivTags } from 'constants/dataset';
import { useRouter } from 'next/router';


export const getStaticProps = async () => {
    const notes = allNotes
    const tags = allScrivTags
    return {
        props: {
            notes, tags
        },
    }
}

export default function Note({ notes, tags }) {
    const [selectedTag, setSelectedTag] = useState(null);
    const [sortedNotes, setSortedNotes] = useState([]);
    const [allTags, settags] = useState([]);
    const router = useRouter()

    useEffect(() => {
        // const sorted = [...posts].sort((a, b) => b.dateValue - a.dateValue);
        const sorted = notes.sort((a, b) => Number(new Date(b.date)) - Number(new Date(a.date)))
        setSortedNotes(sorted);
    }, [notes]);

    useEffect(() => {
        settags(tags);
    }, [tags]);


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

    const onLinkClick = (note) => {
        router.push(`/scrivings/${note.slug}`)
    }

    const filteredNotes = sortedNotes.filter((note) => {
        if (selectedTag === null) {
            return true;
        } else {
            return note.tags.includes(selectedTag);
        }
    });

    return (
        <>
            <div className='flex pt-6 items-end'>
                <Title title="Scrivings" />
            </div>
            <div className="mt-6 flex flex-wrap gap-2 py-4">
                <Tag tag="All" onClick={onAllTagClick} selected={selectedTag === null} />
                {allTags.map((tag, i) => (
                    <Tag key={i} tag={tag} onClick={() => onTagClick(tag)} selected={selectedTag === tag} />
                ))}
            </div>
            <motion.div
                initial="hidden"
                whileInView="visible"
                variants={FadeContainer}
                viewport={{ once: true }}
                className="my-10 grid grid-cols-2 gap-4 mt-14 "
            >
                {filteredNotes.map((note, idx) => (
                    <Link href={`/scrivings/` + note.slug} as={"/scrivings/" + note.slug} >
                        <div
                            // onClick={() => onLinkClick(note)}
                            key={idx} className="rounded-xl hover:drop-shadow-basic dark:bg-darkPrimary flex transform justify-center gap-4 rounded-sm border border-6 border-gray-300 p-4 dark:border-neutral-700 hover:dark:bg-darkSecondary "
                        >
                            <div className=" transition group-hover:scale-110 sm:group-hover:scale-100 dark:text-gray-100 text-gray-600  ">
                                <span className="ml-2 text-sm text-xl font-bold">{note.title}</span>
                            </div>
                            <p className=" select-none text-sm font-semibold sm:inline-flex md:text-base">
                            </p>
                        </div>
                    </Link>
                ))}
            </motion.div>
        </>

    )
}