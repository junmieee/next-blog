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
        const handleTheme = `
            if (localStorage.theme === 'dark) {
                document.documentElement.classList.add('dark');
            } else {
                document.documentElement.classList.remove('dark');
            }
        `;

        return (
            <Html lang="ko">
                <Head />
                <body>
                    <script dangerouslySetInnerHTML={{ __html: handleTheme }} />

                    <Main />
                    <NextScript />
                </body>
            </Html>

        )
    }
}


export default MyDocument
