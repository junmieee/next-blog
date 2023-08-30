import { NotionAPI } from 'notion-client';
import React, { useCallback, useEffect } from 'react';
import { useState } from 'react';
import { NotionRenderer } from 'react-notion-x';
import 'react-notion-x/src/styles.css'
import Title from '../components/Title';
import dynamic from 'next/dynamic'


const Code = dynamic(() =>
    import('react-notion-x/build/third-party/code').then((m) => m.Code)
    , {
        ssr: false
    }
)
const Collection = dynamic(() =>
    import('react-notion-x/build/third-party/collection').then(
        (m) => m.Collection
    ),
    {
        ssr: false
    }
)
const Equation = dynamic(() =>
    import('react-notion-x/build/third-party/equation').then((m) => m.Equation),
    {
        ssr: false
    }
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

export default function About({ recordMap, darkMode }) {


    return (
        <div>
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