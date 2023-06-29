import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';




export function formatSlug(slug) {
    return slug.replace(/\.(mdx|md)/, '')
}


const postsDirectory = path.join(process.cwd(), 'posts');

// export function getSortedPostsData() {
//     const fileNames = fs.readdirSync(postsDirectory);
//     const allPostsData = fileNames.map((fileName) => {
//         const id = fileName.replace(/\.mdx$/, '');

//         const fullPath = path.join(postsDirectory, fileName);
//         const fileContents = fs.readFileSync(fullPath, 'utf8');

//         const matterResult = matter(fileContents);

//         return {
//             id,
//             ...matterResult.data,
//             slug: formatSlug(fileName)

//         };
//     });
//     return allPostsData.sort((a, b) => {
//         if (a.date < b.date) {
//             return 1;
//         } else {
//             return -1;
//         }
//     });
// }

export function getSortedPostsData() {
    const fileNames = fs.readdirSync(postsDirectory);
    const allPostsData = fileNames
        .filter((fileName) => {
            const fullPath = path.join(postsDirectory, fileName);
            return fs.statSync(fullPath).isFile(); // 파일인지 확인
        })
        .map((fileName) => {
            const id = fileName.replace(/\.mdx$/, '');
            const fullPath = path.join(postsDirectory, fileName);
            const fileContents = fs.readFileSync(fullPath, 'utf8');
            const matterResult = matter(fileContents);
            return {
                id,
                ...matterResult.data,
                slug: formatSlug(fileName),
            };
        });
    return allPostsData.sort((a, b) => {
        if (a.date < b.date) {
            return 1;
        } else {
            return -1;
        }
    });
}