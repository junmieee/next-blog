import MDXComponent from '../components/MDXComponents';
import { useMDXComponent } from 'next-contentlayer/hooks';
import { Suspense } from 'react';

function BlogLayout({ post }) {
    if (!post || !post.body) {
        // post가 없거나 body가 없는 경우 에러 처리
        return <div>페이지를 찾을 수 없습니다.</div>;
    }

    const MDXBody = useMDXComponent(post.body.code);

    return (
        <>
            <Suspense>
                <MDXComponent post={post}>
                    <MDXBody />
                </MDXComponent>
            </Suspense>
        </>
    );
}

export default BlogLayout;