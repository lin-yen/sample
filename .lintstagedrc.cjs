module.exports = {
  '*.{ts,tsx,js,jsx,vue}': (files) => {
    const filteredFiles = files.filter((file) => !file.includes('server/'));
    return `eslint ${filteredFiles.join(' ')} --report-unused-disable-directives --max-warnings 1`;
  },
  '*.{ts,tsx,vue}': 'npm run type-check',
  '*.{css,scss,html,vue}': 'npm run lint:style',
};
