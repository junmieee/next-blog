import '../styles/global.css'
// core styles shared by all of react-notion-x (required)
import 'react-notion-x/src/styles.css'

// used for code syntax highlighting (optional)
import 'prismjs/themes/prism-tomorrow.css'

// used for rendering equations (optional)
import 'katex/dist/katex.min.css'
import LayoutWrapper from '../components/LayoutWrapper'
import { ThemeProvider } from "next-themes"
import { AnimatePresence } from 'framer-motion';
import AnimatedPage from 'components/AnimatedPage'
import { useRouter } from "next/router"

export default function App({ Component, pageProps }) {
    const router = useRouter();


    return (
        <ThemeProvider attribute="class" >
            {/* <AnimatePresence  > */}
            <AnimatedPage>
                <LayoutWrapper>
                    <Component {...pageProps} />
                </LayoutWrapper>
            </AnimatedPage>
            {/* </AnimatePresence> */}
        </ThemeProvider>



    )
}