
import Link from 'next/link'
import headerNavLinks from '../data/headerNavLinks';
import SectionContainer from './SectionContailner';
import Footer from './Footer';
import Image from 'next/image';
import { FcAutomatic } from "react-icons/fc";


const LayoutWrapper = ({ children }) => {
    const themeModeHandle = (e) => {
        e.preventDefault();
        localStorage.theme = localStorage.theme === 'dark' ? 'light' : 'dark';
        document.documentElement.classList.toggle('dark');
    };

    return (
        <SectionContainer>
            <div className="flex h-screen flex-col justify-between">
                <header className="flex items-center justify-between py-10">
                    <div>
                        <Link href="/" >
                            <div className="flex items-center justify-between">
                                <div className="mr-3">
                                    <FcAutomatic size={50} />
                                </div>
                                {/* {typeof siteMetadata.headerTitle === 'string' ? (
                  <div className="hidden h-6 text-2xl font-semibold sm:block">
                    {siteMetadata.headerTitle}
                  </div>
                ) : (
                  siteMetadata.headerTitle
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
                                    className="p-1 font-medium text-gray-900 dark:text-gray-100 sm:p-4"
                                >
                                    {link.title}
                                </Link>
                            ))}
                        </div>
                        {/* <ThemeSwitch /> */}
                        <div onClick={themeModeHandle}>
                            <div className="mr-4 hidden dark:block">
                                <Image
                                    width={32}
                                    height={30}
                                    objectFit={'contain'}
                                    className="cursor-pointer"
                                    alt="밝은 모드로 변경"
                                    src="/images/Nav/moon.png"
                                />
                            </div>
                            <div className="mr-4 dark:hidden">
                                <Image
                                    width={32}
                                    height={30}
                                    objectFit={'contain'}
                                    className="cursor-pointer"
                                    alt="어두운 모드로 변경"
                                    src="/images/Nav/sun.png"
                                />
                            </div>
                            {/* <MobileNav /> */}
                        </div>
                    </div>
                </header>
                <main className="mb-auto">{children}</main>
                <Footer />
            </div>
        </SectionContainer>

    )


}


export default LayoutWrapper;