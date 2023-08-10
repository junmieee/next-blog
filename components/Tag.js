import Link from 'next/link';


export default function Tag({ tag, onClick }) {

    // const onTagClick = (tag) => {
    //     if (selectedTag === tag) {
    //         setSelectedTag(null);
    //     } 
    //     if (tag === "All") {

    //     }

    //     else {
    //         setSelectedTag(tag);
    //     }
    // };
    return (
        <div
            className='text-neutral-100 rounded-lg px-2 transition-colors py-0.5 bg-gray-400 dark:bg-gray-600 dark:hover:bg-gray-500 hover:text-gray-50 hover:bg-gray-500 cursor-pointer'
            onClick={() => onClick(tag)}
        >
            {tag}
        </div>
    );
}

{/* <Link href={`/blog/tags/${tag}`}> */ }