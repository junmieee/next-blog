import Link from "next/link";
import Image from "next/image";
import { compareDesc, format, parseISO } from 'date-fns'
import { AiOutlineCalendar } from "react-icons/ai";
import IconWithText from "./IconWithText";
import dayjs from 'dayjs';


const BlogCard = (post) => {
    const formattedDate = dayjs(post.date).format("YYYY-MM-DD")

    return (
        <ul role="list">

            <li className="group/item hover:bg-orange dark:hover:bg-gray-700	rounded-3xl transition duration-0 hover:duration-250">
                <Link href={'/blog/' + post.slug} >
                    <div className="flex items-center w-full rounded-lg my-4 p-4 cursor-pointer">
                        <div className="flex flex-col flex-auto	items-start ">

                            <h2 className="text-2xl	font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 ">
                                {post.title}
                            </h2>
                            <p className="text-slate-500 dark:text-zinc-300 text-base pt-2">
                                {post.description}
                            </p>

                            <IconWithText Icon={AiOutlineCalendar} size={14} text={formattedDate} />


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