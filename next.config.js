module.exports = {
  swcMinify: true,
  images: {
    domains: ['dl.airtable.com'],
  },
  webpack(config) {
    config.module.rules = [
      ...config.module.rules,
      {
        test: /\.mdx?$/,
        use: ['babel-loader', '@mdx-js/loader'],
      },
    ]

    return config
  },
}
