import Document, { Html, Head, Main, NextScript } from 'next/document'




class MyDocument extends Document {
    render() {

        return (
            <Html lang="ko" className="scroll-smooth">
                <Head>
                    <meta name="theme-color" media="(prefers-color-scheme: light)" content="#fff" />
                    <meta name="theme-color" media="(prefers-color-scheme: dark)" content="#000" />
                    {/* <script src="https://giscus.app/client.js"
                        data-repo="junmieee/next-blog"
                        data-repo-id="R_kgDOJMyq2g"
                        data-category="General"
                        data-category-id="DIC_kwDOJMyq2s4CYZ4c"
                        data-mapping="pathname"
                        data-strict="0"
                        data-reactions-enabled="1"
                        data-emit-metadata="0"
                        data-input-position="bottom"
                        data-theme="preferred_color_scheme"
                        data-lang="ko"
                        data-loading="lazy"
                        crossorigin="anonymous"
                        async>
                    </script> */}
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
