const { execSync } = require('child_process');

try {
  execSync('vue-tsc --build --force', { stdio: 'inherit' });
} catch (error) {
  console.error(error);

  process.exit(1);
}
