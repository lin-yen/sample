/* eslint-env node */
const { execSync } = require('child_process');

try {
  execSync('vue-tsc --build --force', { stdio: 'inherit' });
} catch (error) {
  process.exit(1);
}
