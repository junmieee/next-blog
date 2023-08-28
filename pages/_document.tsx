import Document, { Html, Head, Main, NextScript, DocumentContext, DocumentInitialProps } from 'next/document'
import { ServerStyleSheet } from "styled-components";



class MyDocument extends Document {

    render() {

        return (
            <Html lang="ko" >
                <Head>
                    <meta name="theme-color" media="(prefers-color-scheme: light)" content="#fff" />
                    <meta name="theme-color" media="(prefers-color-scheme: dark)" content="#000" />

                </Head>
                {/* <body className="bg-white text-black antialiased dark:bg-gray-900 dark:text-white"> */}
                <Main />
                <NextScript />
                {/* </body> */}
            </Html >

        )
    }
}


export default MyDocument
