import Giscus from "@giscus/react";



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