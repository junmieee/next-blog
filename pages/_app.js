import '../styles/global.css'
// core styles shared by all of react-notion-x (required)
import 'react-notion-x/src/styles.css'

// used for code syntax highlighting (optional)
import 'prismjs/themes/prism-tomorrow.css'

// used for rendering equations (optional)
import 'katex/dist/katex.min.css'
import LayoutWrapper from '../components/LayoutWrapper'
import { ThemeProvider } from "next-themes"
import { useRouter } from "next/router"
import { useEffect, useState } from 'react'

export default function App({ Component, pageProps }) {

    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        const storedTheme = localStorage.getItem('theme');
        if (storedTheme === 'dark') {
            setIsDarkMode(true);
        } else {
            setIsDarkMode(false);
        }
    }, []);

    useEffect(() => {
        if (isDarkMode) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');

        }
    }, [isDarkMode])

    const themeModeHandle = (e) => {
        e.preventDefault();
        localStorage.setItem('theme', !isDarkMode ? 'dark' : 'light');
        setIsDarkMode(!isDarkMode)
    };


    return (
        <LayoutWrapper toggle={themeModeHandle}>
            <Component {...pageProps} darkMode={isDarkMode} />
        </LayoutWrapper>
    )
}