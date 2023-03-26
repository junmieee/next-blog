import Head from "next/head"
import Image from "next/image"
import styled from "styled-components"




export default function LandingPreview({ posts }) {
    return (
        <>
            <Head>

            </Head>
            <div className="flex">
                <div className="flex relative flex-nowrap w-full h-[400px] p-10">
                    <Image
                        width={1000}
                        height={400}
                        className="object-cover rounded-2xl bg-no-repeat bg-cover"
                        src={'/images/Home/tokyo.jpeg'} />
                    {/* <div className="opacity-0 hover:opacity-100"> */}
                    <div className="flex absolute opacity-0 hover:opacity-100 w-full h-full justify-center ">
                        {/* <div className=""> */}
                        <span className="text-4xl font-bold">
                            I am a Frontend Developer

                        </span>

                        {/* </div> */}
                    </div>
                    {/* </div> */}

                </div>
                <div>

                </div>
            </div>

        </>
    )


}