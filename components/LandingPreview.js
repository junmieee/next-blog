import Head from "next/head"
import Image from "next/image"
import styled from "styled-components"
import BlogCard from "./BlogCard"
import { allBlogs } from 'contentlayer/generated'
import LatestComponent from "./LatestComponent"
import { TypeAnimation } from 'react-type-animation';
import Link from "next/link"



// export const getStaticProps = async () => {
//     const posts = allBlogs.sort((a, b) => Number(new Date(b.date)) - Number(new Date(a.date)))
//     return {
//         props: {
//             posts,
//          },
//     }
// }


export default function LandingPreview({ posts }) {



    return (
        <>

            <div className="flex w-full flex-col ">
                <div className="flex justify-center relative items-center">

                    <Image
                        width={1000}
                        height={350}
                        objectFit="cover"

                        className="object-cover w-full h-[350px] rounded-2xl  bg-no-repeat bg-cover"
                        src={'/images/Home/Cover.jpeg'} />
                    <div className="flex pl-14 flex-col hover:bg-gray-900/50 absolute opacity-0 hover:opacity-100 w-full h-full rounded-2xl transition ease-in-out duration-300 ">
                        <span className="text-6xl  font-bold md:text-3xl pt-14 text-slate-50	">
                            Chloe Shin 🦊
                        </span>
                        {/* <span className="text-lg  text-slate-200	  font-light md:text-base mt-2.5 break-all">
                                Enthusiastic about learning new things and interested in user-friendly interfaces
                            </span> */}
                        <div className="mt-2 text-slate-50  ">
                            <TypeAnimation
                                sequence={[
                                    // Same String at the start will only be typed once, initially
                                    'I am studying mainly with JavaScript',
                                    1000,
                                    'I am studying mainly with React',
                                    1000,
                                    'I am studying mainly with TypeScript',
                                    1000,
                                    'I am studying mainly with NextJS',
                                    1000,
                                ]}
                                speed={50}
                                style={{ fontSize: '20px' }}
                                repeat={Infinity}
                            />
                        </div>
                        <Link href={'/about'}
                            className="mt-4
                          
                            ">
                            <span className="text-base text-slate-50 ">
                                Learn more
                            </span>
                        </Link>
                    </div>

                </div>
                <div className="">
                    <h1 className="text-3xl mt-10 mb-5 font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
                        Latest
                    </h1>

                    {/* </div> */}
                    <div className="flex flex-col">
                        {/* {posts.map((post, idx) => (
                            <LatestComponent key={idx} {...post} />
                        ))} */}

                        {/* {posts.length >= 4 ? (
                            <BlogCard posts={posts.slice(0, 5)} />) : (
                            <BlogCard posts={posts} />
                        )
                        } */}
                        <LatestComponent posts={posts} />

                    </div>
                </div>





            </div>


        </>
    )


}