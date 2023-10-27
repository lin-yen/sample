module.exports = {
  "*.{ts,tsx,vue,js,jsx}": "npm run lint:js",
  "*.{css,vue,html,sass,scss}": "npm run lint:style",
  "*.vue": "bash -c vue-tsc --noEmit",
}
