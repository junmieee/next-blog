import { title } from "process";
import Link from "next/link";
import { allBlogs } from 'contentlayer/generated'
import { compareDesc, format, parseISO } from 'date-fns'


// export const getStaticProps = async () => {
//     const posts = allBlogs.sort((a, b) => Number(new Date(b.date)) - Number(new Date(a.date)))
//     return {
//         props: {
//             posts,
//         },
//     }
// }


export default function LatestComponent({ posts }) {
    return (
        <ul className="divide-y divide-gray-200 dark:divide-gray-700">
            {posts.slice(0, 5).map(({ title, date, description, slug }) => {

                return (
                    <li className="py-8">

                        <div className="space-y-2 xl:grid xl:items-baseline xl:space-y-0">
                            <div>
                                <p className="sr-only">Published on</p>
                                <p className="text-base font-medium leading-6 text-gray-500 dark:text-gray-500">
                                    {format(parseISO(date), 'LLLL d, yyyy')}
                                    {/* {date} */}
                                </p>
                            </div>
                            <div className="flex xl:col-span-3 space-y-5">
                                <div className="w-10/12 ">
                                    <div>
                                        <h2 className="text-2xl font-bold leading-8 tracking-tight">
                                            <Link
                                                href={`/blog/${slug}`}
                                                passHref
                                                className="text-gray-900 dark:text-gray-100"
                                            >
                                                {title}
                                            </Link>
                                        </h2>

                                    </div>
                                    <div className="text-gray-500 dark:text-gray-400 pt-3">
                                        {description}
                                    </div>
                                </div>
                                <div className="flex right-0 leading-6">
                                    <Link
                                        href={`/blog/${slug}`}
                                        passHref
                                        aria-label={`Read "${title}"`}
                                    >
                                        <div className="flex bg-cyan-800 dark:hover:bg-cyan-700	 ease-in-out duration-200 hover:bg-cyan-700	 h-10 w-36 rounded-2xl justify-center items-center">
                                            <span className="text-slate-100  ">Read more &rarr;</span>
                                        </div>



                                    </Link>
                                </div>
                            </div>
                        </div>


                    </li>
                )
            })}

        </ul>
    )
}