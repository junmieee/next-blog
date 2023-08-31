// import dayjs from 'dayjs';
import Link from 'next/link';

import Tag from './Tag';

export default function PostListItem({ post, tag }) {

    return (
        <div className=' w-full py-4 hover:drop-shadow-basic group'>
            <Link href={'/blog/' + post.slug} className="hover:drop-shadow-base">
                <span className="text-2xl font-bold text-gray-900 dark:text-gray-100">{post.title}</span>
                <span className="text-tertiary mt-1 text-gray-600 dark:text-gray-400">{post.description}</span>
            </Link>
            <div className="mt-2 inline-flex w-full items-start gap-2 text-sm">
                <div className="flex flex-wrap items-center gap-2">
                    {post.tags.map((tag, i) => (
                        <Tag key={i} tag={tag} />
                    ))}
                </div>

                <div className="ml-auto flex gap-2 whitespace-nowrap group-hover:drop-shadow-base-bold">

                </div>
            </div>
        </div>
    );
}