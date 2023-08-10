import Document, { Html, Head, Main, NextScript } from 'next/document'




class MyDocument extends Document {
    render() {

        return (
            <Html lang="ko" className="scroll-smooth">
                <Head>
                    <meta name="theme-color" media="(prefers-color-scheme: light)" content="#fff" />
                    <meta name="theme-color" media="(prefers-color-scheme: dark)" content="#000" />
                    <script src="https://utteranc.es/client.js"
                        repo="https://github.com/junmieee/next-blog.git"
                        issue-term="pathname"
                        label="Comments"
                        theme="github-light"
                        crossorigin="anonymous"
                        async>
                    </script>
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
