import Document, { Html, Head, Main, NextScript } from 'next/document'

// export default function Document() {
//     return (
//         <Html lang="ko">
//             <Head />
//             <body>
//                 <Main />
//                 <NextScript />
//             </body>
//         </Html>
//     )
// }


class MyDocument extends Document {
    render() {
        return (
            <Html lang="ko">
                <Head />
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>

        )
    }
}


export default MyDocument
