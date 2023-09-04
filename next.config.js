const { withContentlayer } = require('next-contentlayer')


const withMDX = require('@next/mdx')({
    extension: /\.mdx?$/,
    options: {
        // If you use remark-gfm, you'll need to use next.config.mjs
        // as the package is ESM only
        // https://github.com/remarkjs/remark-gfm#install
        remarkPlugins: [],
        rehypePlugins: [],
        // If you use `MDXProvider`, uncomment the following line.
        // providerImportSource: "@mdx-js/react",
    },
})


/** @type {import('next').NextConfig} */
const nextConfig = {
    // distDir: "_next",
    // generateBuildId: async () => {
    //     if (process.env.BUILD_ID) {
    //         return process.env.BUILD_ID;
    //     } else {
    //         return `${new Date().getTime()}`;
    //     }
    // },
    // Configure pageExtensions to include md and mdx
    pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
    // Optionally, add any other Next.js config below
    // reactStrictMode: true,
    // reactStrictMode: true,


}

// Merge MDX config with Next.js config
// module.exports = withMDX(nextConfig)


module.exports = withContentlayer(nextConfig)
