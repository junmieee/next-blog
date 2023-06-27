import MDXComponent from '../components/MDXComponents';
import { useMDXComponent } from 'next-contentlayer/hooks'


function BlogLayout({ post }) {
    const MDXBody = useMDXComponent(post.body.code)

    console.log(post);

    return (
        <MDXComponent title={post.title} data={post.date}>
            <MDXBody />
        </MDXComponent>

    )
}

export default BlogLayout;

