import MDXComponent from '../components/MDXComponents';
import { useMDXComponent } from 'next-contentlayer/hooks'
import Tag from '../components/Tag';
import { allTags } from '../constants/dataset';


function BlogLayout({ post }) {
    const MDXBody = useMDXComponent(post.body.code)

    console.log(post);

    return (
        <MDXComponent post={post} title={post.title} data={post.date}>
            <MDXBody />
        </MDXComponent>

    )
}

export default BlogLayout;

