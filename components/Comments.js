import Giscus from "@giscus/react";



export default function Comments({ postId }) {

    const theme = typeof window !== 'undefined' ? localStorage.getItem('theme') : null;

    return (
        <Giscus
            id={postId}
            repo="junmieee/next-blog"
            repoId="R_kgDOJMyq2g"
            category="Announcements"
            categoryId="DIC_kwDOJMyq2s4CYZ4b"
            mapping="url"
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

// import { useEffect, useRef } from 'react';

// export default function Comments({ postId }) {
//     const ref = useRef(null);
//     //   const { resolvedTheme } = useTheme();

//     // https://github.com/giscus/giscus/tree/main/styles/themes
//     const theme = typeof window !== 'undefined' ? localStorage.getItem('theme') : null;

//     useEffect(() => {
//         if (!ref.current || ref.current.hasChildNodes()) return;

//         const scriptElem = document.createElement('script');
//         scriptElem.src = 'https://giscus.app/client.js';
//         scriptElem.async = true;
//         scriptElem.crossOrigin = 'anonymous';

//         scriptElem.setAttribute('data-repo', 'junmieee/next-blog');
//         scriptElem.setAttribute('data-repo-id', '[R_kgDOJMyq2g]');
//         scriptElem.setAttribute('data-category', 'General');
//         scriptElem.setAttribute('data-category-id', '[DIC_kwDOJMyq2s4CYZ4b]');
//         scriptElem.setAttribute('data-mapping', 'specific');
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
//         const iframe = document.querySelector < HTMLIFrameElement > ('iframe.giscus-frame');
//         iframe?.contentWindow?.postMessage({ giscus: { setConfig: { theme } } }, 'https://giscus.app');
//     }, [theme]);

//     return <section ref={ref} />;
// }

