const fs = require('fs')
const stickersFolder = './content/stickers';

const getPathsForStickers = () =>
  fs.readdirSync(stickersFolder).reduce((acc, blogName) => {
    const trimmedName = blogName.substring(0, blogName.length - 3)
    return Object.assign(acc, {
      [`/stickers/${trimmedName}`]: {
        page: '/stickers/[slug]',
        query: {
          slug: trimmedName,
        },
      },
    })
  }, {})

module.exports = {
  webpack: configuration => {
    configuration.module.rules.push({
      test: /\.md$/,
      use: 'frontmatter-markdown-loader'
    })
    return configuration
  },
  async exportPathMap(defaultPathMap) {
    return {
      ...defaultPathMap,
      ...getPathsForStickers(),
    }
  },
}
