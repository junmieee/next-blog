import MDXComponent from '../components/MDXComponents';
import { useMDXComponent } from 'next-contentlayer/hooks'
import { Suspense } from 'react';
import { Giscus } from 'components/Comments'

function BlogLayout({ post }) {
    const MDXBody = useMDXComponent(post.body.code)

    return (
        <>
            <Suspense>
                <MDXComponent post={post} title={post.title} >
                    <MDXBody />
                </MDXComponent>
                <Giscus />
            </Suspense>

        </>


    )
}

export default BlogLayout;

