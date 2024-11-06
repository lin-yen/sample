const config = {
  syntax: require('postcss-scss'),

  plugins: {
    'postcss-html': {}, // 處理 HTML 中的 CSS
    'postcss-normalize': {}, // 引入 normalize.css
    autoprefixer: {}, // 自動添加瀏覽器前綴
  },
};

// NOTE: 打包時壓縮 CSS
if (process.env.NODE_ENV === 'production') {
  config.plugins['cssnano'] = {};
}

module.exports = config;