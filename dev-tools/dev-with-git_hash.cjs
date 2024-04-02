/* eslint-env node */
const { execSync } = require('child_process');

try {
  const commitHash = execSync('git rev-parse --short HEAD').toString().trim();

  execSync(`npm run dev --git_hash=${commitHash}`, { stdio: 'inherit' });
} catch (error) {
  process.exit(1);
}
