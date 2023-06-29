// contentlayer.config.js
import { defineDocumentType, makeSource } from "contentlayer/source-files";
var Blog = defineDocumentType(() => ({
  name: "Post",
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
    thumbnail: { type: "string", required: true }
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
  documentTypes: [Post]
});
export {
  Blog,
  contentlayer_config_default as default
};
//# sourceMappingURL=compiled-contentlayer-config-GGWF3LMB.mjs.map
