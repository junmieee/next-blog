
import Link from 'next/link'
import headerNavLinks from '../data/headerNavLinks';
import SectionContainer from './SectionContailner';
import Footer from './Footer'
import Image from 'next/image';
import { FcAutomatic } from "react-icons/fc";
import { BsFillSunFill, BsCloudMoonFill } from "react-icons/bs";
import React, { useEffect, useState } from 'react';


const LayoutWrapper = ({ children }) => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        const storedTheme = localStorage.getItem('theme');
        if (storedTheme === 'dark') {
            setIsDarkMode(true);
            document.documentElement.classList.add('dark');
        } else {
            setIsDarkMode(false);
            document.documentElement.classList.remove('dark');
        }
    }, []);


    useEffect(() => {
        if (isDarkMode) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [isDarkMode]);


    const themeModeHandle = (e) => {
        e.preventDefault();
        setIsDarkMode(!isDarkMode);
        localStorage.setItem('theme', !isDarkMode ? 'dark' : 'light');
        // document.documentElement.classList.toggle('dark'); // body의 dark 클래스를 토글(추가 또는 제거)
    };

    return (
        <SectionContainer >
            <div className="relative flex h-screen flex-col justify-between">

                <header className="flex w-full px-5 xl:px-10 top-0 left-0 right-0 m-auto mx-auto max-w-5xl xl:max-w-4xl dark:bg-gray-800 bg-white h-10 items-center fixed z-50 justify-between py-10">
                    <div>
                        <Link href="/" >
                            <div className="flex items-center flex-nowrap justify-between">
                                <div className="">
                                    <Image
                                        width={50}
                                        height={50}
                                        objectFit="cover"

                                        className="rounded-full"
                                        src='/images/Home/tokyo.jpeg' />
                                </div>
                                {/* {typeof siteMetadata.headerTitle === 'string' ? (
                  <div className="hidden h-6 text-2xl font-semibold sm:block">
                    {siteMetadata.headerTitle}
                  </div>
                ) : (
                  siteMetadata.headerTitle s
                )} */}
                            </div>
                        </Link>
                    </div>
                    <div className="flex items-center text-base leading-5">
                        <div className="hidden sm:block">
                            {headerNavLinks.map((link) => (
                                <Link
                                    key={link.title}
                                    href={link.href}
                                    className="font-medium text-gray-900 p-2 dark:text-gray-100 sm:p-4"
                                >
                                    {link.title}
                                </Link>
                            ))}
                        </div>
                        {/* <ThemeSwitch /> */}
                        <div onClick={themeModeHandle}>
                            <div className="hidden dark:block text-white">
                                <BsCloudMoonFill
                                    size={30}
                                    objectFit={'contain'}
                                    className="cursor-pointer"
                                    alt="밝은 모드로 변경"
                                />
                            </div>
                            <div className="dark:hidden ? text-black">
                                <BsFillSunFill
                                    size={30}
                                    objectFit={'contain'}
                                    className="cursor-pointer"
                                    alt="어두운 모드로 변경"
                                />
                            </div>
                            {/* <MobileNav /> */}
                        </div>
                    </div>
                </header>
                <main className="mb-auto mt-20">{children}</main>
                <Footer />
            </div>
        </SectionContainer >

    )


}


export default LayoutWrapper;