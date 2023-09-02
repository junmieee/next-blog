import Giscus from "@giscus/react";



export default function Comments() {

    const theme = typeof window !== 'undefined' ? localStorage.getItem('theme') : null;

    return (
        <Giscus
            id="comments"
            repo="junmieee/next-blog"
            repoId="R_kgDOJMyq2g"
            category="Announcements"
            categoryId="DIC_kwDOJMyq2s4CYZ4b"
            mapping="specific"
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