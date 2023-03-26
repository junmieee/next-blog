import MDXComponent from '../components/MDXComponents';
import { useMDXComponent } from 'next-contentlayer/hooks'

import Head from 'next/head'
import Link from 'next/link'
import { format, parseISO } from 'date-fns'
import { FcHome } from "react-icons/fc";


function BlogLayout({ post }) {
    const MDXContent = useMDXComponent(post.body.code)

    console.log(post);

    return (
        <MDXComponent title={post.title} data={post.date}>
            <MDXContent />
        </MDXComponent>

    )
}

export default BlogLayout;

