import MDXComponent from '../components/MDXComponents';
import { useMDXComponent } from 'next-contentlayer/hooks'
import { Suspense } from 'react';

function BlogLayout({ post }) {
    const MDXBody = useMDXComponent(post.body.code)

    return (
        <>
            <Suspense>
                <MDXComponent post={post}>
                    <MDXBody />
                </MDXComponent>
            </Suspense>

        </>


    )
}

export default BlogLayout;

