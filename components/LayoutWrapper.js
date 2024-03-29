
import Link from 'next/link'
import headerNavLinks from '../constants/data/headerNavLinks';
import SectionContainer from './SectionContailner';
import Footer from './Footer'
import Image from 'next/image';
import { BsFillSunFill, BsCloudMoonFill } from "react-icons/bs";
import React, { useEffect, useState } from 'react';
import About from '../pages/about'
import { useRouter } from 'next/router'


const LayoutWrapper = ({ children, toggle }) => {
    const [selectedLinkId, setSelectedLinkId] = useState(null);
    const router = useRouter()

    const handleLinkClick = (id) => {
        setSelectedLinkId(id);
        localStorage.setItem('selectedLinkId', id);
    };


    const onHomeClick = () => {
        setSelectedLinkId(null)
    }

    useEffect(() => {
        const storedLinkId = localStorage.getItem('selectedLinkId');

        if (router.pathname === '/') {
            localStorage.setItem('selectedLinkId', null);
        } else if (storedLinkId) {
            setSelectedLinkId(storedLinkId);

        }

    }, []);

    return (
        <>
            <SectionContainer >
                <div className="relative flex h-screen flex-col justify-between">
                    <header className="flex w-full px-5 xl:px-10 top-0 left-0 right-0 m-auto mx-auto max-w-5xl xl:max-w-5xl dark:bg-zinc-900 bg-white h-5 items-center fixed z-50 justify-between py-10">
                        <Link href="/" >
                            <div
                                onClick={onHomeClick}
                                className="flex items-center flex-nowrap justify-between">
                                <Image
                                    width={50}
                                    height={50}

                                    objectfit="cover"
                                    alt='home'
                                    className="rounded-full"
                                    src='/images/Home/tokyo.jpeg' />
                            </div>
                        </Link>
                        <div className="flex items-center text-base leading-5">
                            <div className="hidden sm:block">
                                {headerNavLinks.map((link) => (
                                    <Link
                                        key={link.title}
                                        href={link.href}
                                        className={`font-medium p-2 sm:p-4 ${link.href === selectedLinkId
                                            ? 'text-gray-600 dark:text-gray-200 dark:font-extrabold font-black	'
                                            : 'text-gray-400 dark:text-gray-400  dark:font-extrabold font-extrabold'
                                            }`}
                                        onClick={() => handleLinkClick(link.href)}>
                                        {link.title}
                                    </Link>
                                ))}
                            </div>
                            <div onClick={toggle}>
                                <div className="hidden dark:block text-white">
                                    <BsCloudMoonFill
                                        size={30}
                                        color='#ffc048'
                                        objectfit={'contain'}
                                        className="cursor-pointer"
                                        alt="밝은 모드로 변경"
                                    />
                                </div>
                                <div className="dark:hidden ? text-black">
                                    <BsFillSunFill
                                        size={30}
                                        color='#ffc048'
                                        objectfit={'contain'}
                                        className="cursor-pointer"
                                        alt="어두운 모드로 변경"
                                    />
                                </div>
                            </div>
                        </div>
                    </header>
                    <main className="mb-auto mt-20">{children}</main>
                    <Footer />
                </div>
            </SectionContainer >
        </>

    )


}


export default LayoutWrapper;