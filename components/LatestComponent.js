import { title } from "process";
import Link from "next/link";
import IconWithText from "./IconWithText";
import { AiOutlineCalendar } from "react-icons/ai";
import Divider from "./divider";
import dayjs from "dayjs";

export default function LatestComponent({ posts }) {

    return (
        <div >
            {posts.slice(0, 5).map(({ title, date, description, slug }) => {
                const formattedDate = dayjs(date).format("YYYY-MM-DD")
                return (
                    <Link
                        key={slug}
                        href={`/blog/${slug}`}>
                        <ul className="divide-y divide-gray-500 dark:divide-gray-400">
                            <li className="py-8">
                                <div className="space-y-2 xl:grid xl:items-baseline xl:space-y-0 hover:drop-shadow-basic">
                                    <div className="flex xl:col-span-3 space-y-5">
                                        <div className="w-10/12 ">
                                            <div>
                                                <h2 className="text-2xl font-bold leading-8 tracking-tight">
                                                    <div className="text-gray-900 dark:text-gray-100"
                                                    >
                                                        {title}
                                                    </div>
                                                </h2>
                                            </div>
                                            <div className="text-gray-500 dark:text-gray-400 pt-3">
                                                {description}
                                            </div>
                                            <div>
                                                <IconWithText Icon={AiOutlineCalendar} size={14} text={formattedDate} />
                                            </div>
                                        </div>
                                        <div className="flex right-0 leading-6">
                                        </div>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </Link>
                )
            })}
        </div>
    )
}