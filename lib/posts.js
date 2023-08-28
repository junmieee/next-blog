import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';


export function formatSlug(slug) {
    return slug.replace(/\.(mdx|md)/, '')
}


const postsDirectory = path.join(process.cwd(), 'posts/blog');

export function getSortedPostsData() {
    // console.log('postsDirectory', postsDirectory)
    const fileNames = fs.readdirSync(postsDirectory);
    // console.log('fileNames', fileNames)
    const allPostsData = fileNames
        .filter((fileName) => {
            const fullPath = path.join(postsDirectory, fileName);
            // console.log('fullPath', fullPath) ///Users/junmishin/Desktop/projects/next-blog/posts/post-01.mdx
            return fs.statSync(fullPath).isFile(); // 파일인지 확인
        })
        .map((fileName) => {
            const id = fileName.replace(/\.mdx$/, '');
            const fullPath = path.join(postsDirectory, fileName);
            const fileContents = fs.readFileSync(fullPath, 'utf8');
            const matterResult = matter(fileContents);
            // console.log('matterResult', matterResult)
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

const notesDirectory = path.join(process.cwd(), 'posts/scrivings');

export function getSortedNotesData() {
    const fileNames = fs.readdirSync(notesDirectory);
    const allNotesData = fileNames
        .filter((fileName) => {
            const fullPath = path.join(notesDirectory, fileName);
            return fs.statSync(fullPath).isFile(); // 파일인지 확인
        })
        .map((fileName) => {
            const id = fileName.replace(/\.mdx$/, '');
            const fullPath = path.join(notesDirectory, fileName);
            const fileContents = fs.readFileSync(fullPath, 'utf8');
            const matterResult = matter(fileContents);
            const date = matterResult.data.date || ''; // 날짜가 없으면 빈 문자열로 초기화
            return {
                id,
                ...matterResult.data,
                date,
                slug: formatSlug(fileName),
            };
        });

    return allNotesData.sort((a, b) => {
        if (a.date < b.date) {
            return 1;
        } else {
            return -1;
        }
    });
}