import MDXComponent from '../components/MDXComponents';
import { useMDXComponent } from 'next-contentlayer/hooks'
import Comments from 'components/Comments'

function BlogLayout({ post }) {
    const MDXBody = useMDXComponent(post.body.code)

    return (
        <>
            <MDXComponent post={post}>
                <MDXBody />
            </MDXComponent>

        </>


    )
}

export default BlogLayout;

