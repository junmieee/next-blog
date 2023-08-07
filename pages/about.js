import { NotionAPI } from 'notion-client';
import * as React from 'react';
import { useState } from 'react';
import { NotionRenderer } from 'react-notion-x';
import { Code } from 'react-notion-x/build/third-party/code'
import { Collection } from 'react-notion-x/build/third-party/collection'
import { Equation } from 'react-notion-x/build/third-party/equation'
import { Modal } from 'react-notion-x/build/third-party/modal'
import { Pdf } from 'react-notion-x/build/third-party/pdf'
import 'react-notion-x/src/styles.css'

import Title from '../components/Title';

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
            <Title title="About me" />
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