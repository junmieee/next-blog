import MDXComponent from '../components/MDXComponents';
import { useMDXComponent } from 'next-contentlayer/hooks'
// import Giscus from '../components/Comments';


function BlogLayout({ post }) {
    // const MDXBody = useMDXComponent(post.body.code)

    return (
        <>
            <MDXComponent post={post} title={post.title} >
                {/* <MDXBody /> */}
            </MDXComponent>
            {/* <Giscus /> */}

        </>


    )
}

export default BlogLayout;

