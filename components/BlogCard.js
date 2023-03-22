import Link from "next/link";
import Image from "next/image";
import { compareDesc, format, parseISO } from 'date-fns'



const BlogCard = (post) => {
    return (
        <ul role="list">

            <li className="group/item hover:bg-slate-100 rounded-3xl transition duration-0 hover:duration-250">
                <Link href={`/blog/${post.url}`} >
                    <div className="flex items-center w-full rounded-lg my-4 p-4 cursor-pointer">
                        <div className="flex flex-col flex-auto	items-start ">

                            <h2 className="text-2xl	font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 ">
                                {post.title}
                            </h2>
                            <p>
                                {post.description}
                            </p>
                            <p className="text-slate-400 text-xs	">
                                {format(parseISO(post.date), 'LLLL d, yyyy')}
                            </p>


                        </div>
                        <Image
                            className="rounded-lg item-center justify-center"
                            src={post.thumbnail}
                            alt='first-post'
                            alt="thumbnail"
                            width={100}
                            height={100}

                        />

                    </div>


                </Link >
            </li>
        </ul>


    )
}



export default BlogCard;