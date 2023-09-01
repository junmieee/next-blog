import { useTheme } from 'next-themes';
import { useEffect, useRef } from 'react';
import Giscus from "@giscus/react";

// export default function Giscus() {
//     const ref = useRef(null);
//     const { resolvedTheme } = useTheme();

//     // https://github.com/giscus/giscus/tree/main/styles/themes
//     const theme = resolvedTheme === 'dark' ? 'dark' : 'light';

//     useEffect(() => {
//         if (!ref.current || ref.current.hasChildNodes()) return;

//         const scriptElem = document.createElement('script');
//         scriptElem.src = 'https://giscus.app/client.js';
//         scriptElem.async = true;
//         scriptElem.crossOrigin = 'anonymous';

//         scriptElem.setAttribute('data-repo', 'junmieee/next-blog');
//         scriptElem.setAttribute('data-repo-id', '[R_kgDOJMyq2g]');
//         scriptElem.setAttribute('data-category', 'General');
//         scriptElem.setAttribute('data-category-id', '[DIC_kwDOJMyq2s4CYZ4c]');
//         scriptElem.setAttribute('data-mapping', 'pathname');
//         scriptElem.setAttribute('data-strict', '0');
//         scriptElem.setAttribute('data-reactions-enabled', '1');
//         scriptElem.setAttribute('data-emit-metadata', '0');
//         scriptElem.setAttribute('data-input-position', 'bottom');
//         scriptElem.setAttribute('data-theme', theme);
//         scriptElem.setAttribute('data-lang', 'en');
//         ref.current.appendChild(scriptElem);
//     }, []);

//     // https://github.com/giscus/giscus/blob/main/ADVANCED-USAGE.md#isetconfigmessage
//     useEffect(() => {
//         const iframe = document.querySelector('iframe.giscus-frame');
//         iframe?.contentWindow?.postMessage({ giscus: { setConfig: { theme } } }, 'https://giscus.app');
//     }, [theme]);


//     return <section ref={ref} />;
// }



export default function Comments() {
    const theme = localStorage.getItem('theme');

    // const theme = resolvedTheme === 'dark' ? 'dark' : 'light';

    return (
        <Giscus
            id="comments"
            repo="junmieee/next-blog"
            repoId="R_kgDOJMyq2g"
            category="General"
            categoryId="DIC_kwDOJMyq2s4CYZ4c"
            mapping="pathname"
            term="Welcome to @giscus/react component!"
            reactionsEnabled="1"
            emitMetadata="0"
            inputPosition="top"
            theme={theme}
            lang="en"
            loading="lazy"
        />
    )
}