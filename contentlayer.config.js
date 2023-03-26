// contentlayer.config.js

import { defineDocumentType, makeSource } from 'contentlayer/source-files'

export const Blog = defineDocumentType(() => ({
    name: 'Blog',
    filePathPattern: `blog/*.mdx`,
    contentType: 'mdx',

    fields: {
        title: {
            type: 'string',
            // description: 'The title of the post',
            required: true,
        },

        date: {
            type: 'date',
            // description: 'The date of the post',
            required: true,
        },
        // description: { type: 'string', required: true },
        thumbnail: { type: 'string', required: true },
    },
    computedFields: {
        url: {
            type: 'string',
            // resolve: (post) => `/${post._raw.flattenedPath}`,
            resolve: (post) => post._raw.sourceFileName.replace(/\.mdx$/, ''),
        },
    },
}))

// export const Blog = defineDocumentType(() => ({
//     name: 'Blog',
//     filePathPattern: `blog/*.mdx`,
//     contentType: 'mdx',
//     fields: {
//         title: { type: 'string', required: true },
//         date: { type: 'string', required: true },
//         description: { type: 'string', required: true },
//         thumbnail: { type: 'string', required: true },
//         tags: {
//             type: 'list',
//             required: true,
//             of: {
//                 type: 'string',
//             },
//             default: [],
//         },
//     },
//     computedFields: {
//         url: {
//             type: 'string',
//             resolve: doc => doc._raw.sourceFileName.replace(/\.mdx$/, ''),
//         },
//     },
// }))


export default makeSource({
    contentDirPath: 'posts',
    documentTypes: [Blog],
})
