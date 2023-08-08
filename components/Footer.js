import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { RiArticleLine } from "react-icons/ri";

function Footer() {
    return (
        <footer className="flex flex-col items-center mt-20 py-8 border-t border-solid">
            <div className="flex flex-col items-center gap-4">
                <div className="flex flex-row gap-4">
                    <Link href="/" className="text-gray-400 hover:text-gray-500  transition duration-300">
                        Home
                    </Link>
                    <Link href="/blog" className="text-gray-400 hover:text-gray-500  transition duration-300">
                        Blog
                    </Link>
                    <Link href="/about" className="text-gray-400 hover:text-gray-500  transition duration-300">
                        About
                    </Link>
                </div>
                <div className="flex flex-row gap-4">
                    <Link href="https://github.com/junmieee"
                        target="_blank"
                        className="text-gray-400  hover:text-gray-500  transition duration-300"
                    >
                        <FaGithub />
                    </Link>
                    <Link href="https://velog.io/@junmieee_"
                        target="_blank"
                        className="text-gray-400  hover:text-gray-500 transition duration-300"
                    >
                        <RiArticleLine />
                    </Link>
                </div>
            </div>
        </footer>
    );
}

export default Footer;