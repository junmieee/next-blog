import '../styles/global.css'

import LayoutWrapper from '../components/LayoutWrapper'
import { ThemeProvider } from "next-themes"


export default function App({ Component, pageProps }) {

    return (
        <ThemeProvider attribute="class" >
            <LayoutWrapper>
                <Component {...pageProps} />
            </LayoutWrapper>
        </ThemeProvider>

    )
}