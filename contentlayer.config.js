// contentlayer.config.js

import { defineDocumentType, makeSource } from 'contentlayer/source-files'

export const Blog = defineDocumentType(() => ({
    name: 'Blog',
    filePathPattern: `blog/*.mdx`,
    // filePathPattern: `**/*.mdx`,
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
    },
    computedFields: {
        url: {
            type: 'string',
            resolve: post => post._raw.sourceFileName.replace(/\.mdx$/, ''),
        },
        // url: { type: 'string', resolve: (post) => `/posts/${post._raw.flattenedPath}` },

    },
}))




export default makeSource({
    contentDirPath: 'posts',
    documentTypes: [Blog],
})
