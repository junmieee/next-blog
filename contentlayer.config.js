// contentlayer.config.js

import { defineDocumentType, makeSource } from 'contentlayer/source-files'

export const Blog = defineDocumentType(() => ({
    name: 'Blog',
    // filePathPattern: `blog/*.mdx`,
    filePathPattern: `blog/*.mdx`,
    contentType: 'mdx',

    fields: {
        title: {
            type: 'string',
            required: true,
        },

        date: {
            type: 'date',
            required: true,
        },
        description: { type: 'string', required: true },
        thumbnail: { type: 'string', required: true },
        tags: { type: 'list', required: true, of: { type: 'string' } },
        draft: { type: 'boolean' },


    },
    computedFields: {
        slug: {
            type: 'string',
            resolve: post => post._raw.sourceFileName.replace(/\.mdx$/, ''),
        },
        // slug: { type: 'string', resolve: (post) => `/posts/${post._raw.flattenedPath}` },

    },
}))



export const Note = defineDocumentType(() => ({
    name: 'Note',
    filePathPattern: `scrivings/**/*.mdx`,
    contentType: 'mdx',
    fields: {
        title: {
            type: 'string',
            required: true,
        },

        date: {
            type: 'date',
            required: true,
        },
        tags: { type: 'list', required: true, of: { type: 'string' } },
    },
    computedFields: {
        url_path: {
            type: 'string',
            resolve: note => note._raw.flattenedPath.replace(/pages\/?/, ''),
        },
        slug: {
            type: 'string',
            resolve: note => note._raw.sourceFileName.replace(/\.mdx$/, ''),
        },
        // pathSegments: {
        //     type: 'json',
        //     resolve: doc =>
        //         doc._raw.flattenedPath
        //             .split('/')
        //             // skip `/docs` prefix
        //             .slice(1)
        //             .map(pathName => {
        //                 return { pathName }
        //             }),
        // },
        // slug: { type: 'string', resolve: (post) => `/posts/${post._raw.flattenedPath}` },
    },
}))



export default makeSource({
    contentDirPath: 'posts',
    documentTypes: [Blog, Note],
})