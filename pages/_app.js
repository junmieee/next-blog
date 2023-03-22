import '../styles/global.css'

import LayoutWrapper from '../components/LayoutWrapper'


export default function App({ Component, pageProps }) {

    return (

        <LayoutWrapper>
            <Component {...pageProps} />
        </LayoutWrapper>
    )
}