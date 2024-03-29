// contentlayer.config.js
import { defineDocumentType, makeSource } from "contentlayer/source-files";
var Blog = defineDocumentType(() => ({
  name: "Blog",
  // filePathPattern: `blog/*.mdx`,
  filePathPattern: `**/*.mdx`,
  contentType: "mdx",
  fields: {
    title: {
      type: "string",
      required: true
    },
    date: {
      type: "date",
      required: true
    },
    description: { type: "string", required: true },
    thumbnail: { type: "string", required: true },
    tags: { type: "list", required: true, of: { type: "string" } },
    draft: { type: "boolean" }
  },
  computedFields: {
    slug: {
      type: "string",
      resolve: (post) => post._raw.sourceFileName.replace(/\.mdx$/, "")
    }
    // slug: { type: 'string', resolve: (post) => `/posts/${post._raw.flattenedPath}` },
  }
}));
var contentlayer_config_default = makeSource({
  contentDirPath: "posts",
  documentTypes: [Blog]
});
export {
  Blog,
  contentlayer_config_default as default
};
//# sourceMappingURL=compiled-contentlayer-config-2NXKFH43.mjs.map
