module.exports = {
    semi: false,
    singleQuote: true,
    tabWidth: 2,
    trailingComma: "es5",
    useTabs: false,
    proseWrap: "always",
    printWidth: 80,
    overrides: [
      {
        files: ["*.md", "*.mdx"],
        options: {
          tabWidth: 4,
        },
      },
    ],
  }