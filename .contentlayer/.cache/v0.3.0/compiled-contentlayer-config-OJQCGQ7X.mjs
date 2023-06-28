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
    thumbnail: { type: "string", required: true }
  },
  computedFields: {
    url: {
      type: "string",
      resolve: (post) => post._raw.sourceFileName.replace(/\.mdx$/, "")
    }
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
//# sourceMappingURL=compiled-contentlayer-config-OJQCGQ7X.mjs.map
