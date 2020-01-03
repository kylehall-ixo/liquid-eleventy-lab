const syntaxHighlight = require('@11ty/eleventy-plugin-syntaxhighlight')

module.exports = function(config) {
  config.addPassthroughCopy('css/')
  config.addPassthroughCopy({ 'node_modules/prism-themes/themes/prism-atom-dark.css': 'css/lib/prism-theme.css' })

  config.addPlugin(syntaxHighlight)
}
