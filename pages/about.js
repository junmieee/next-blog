import { NotionAPI } from 'notion-client';
import * as React from 'react';
import { useState } from 'react';
import { NotionRenderer } from 'react-notion-x';
// import { Code } from 'react-notion-x/build/third-party/code'
// import { Collection } from 'react-notion-x/build/third-party/collection'
// import { Equation } from 'react-notion-x/build/third-party/equation'
// import { Modal } from 'react-notion-x/build/third-party/modal'
// import { Pdf } from 'react-notion-x/build/third-party/pdf'
import 'react-notion-x/src/styles.css'

import Title from '../components/Title';
import dynamic from 'next/dynamic'

const Code = dynamic(() =>
    import('react-notion-x/build/third-party/code').then((m) => m.Code)
)
const Collection = dynamic(() =>
    import('react-notion-x/build/third-party/collection').then(
        (m) => m.Collection
    )
)
const Equation = dynamic(() =>
    import('react-notion-x/build/third-party/equation').then((m) => m.Equation)
)
const Pdf = dynamic(
    () => import('react-notion-x/build/third-party/pdf').then((m) => m.Pdf),
    {
        ssr: false
    }
)
const Modal = dynamic(
    () => import('react-notion-x/build/third-party/modal').then((m) => m.Modal),
    {
        ssr: false
    }
)

const notion = new NotionAPI();

export async function getStaticProps() {
    const recordMap = await notion.getPage('9561708319f04c53b7d318d39139e80e?pvs=4');
    return { props: { recordMap } };
}

export default function About({ recordMap }) {

    const [darkMode, setDarkMode] = useState(false);
    React.useEffect(() => {
        const storedTheme = localStorage.getItem('theme');
        console.log('storedTheme', storedTheme);
        if (storedTheme === 'dark') {
            setDarkMode(true);
        } else {
            setDarkMode(false);
        }
    }, []);

    return (
        <div>
            {/* <Head>
        <meta name='description' content='React Notion X Minimal Demo' />

        <title>About me</title>
      </Head> */}
            <div className='flex justify-center items-center mb-10 '><Title title="About me" /></div>

            <NotionRenderer
                recordMap={recordMap}
                darkMode={darkMode}
                components={{
                    Code,
                    Collection,
                    Equation,
                    Modal,
                    Pdf
                }}
            />
        </div>
    );
}