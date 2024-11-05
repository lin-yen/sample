import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';
import { satisfies } from 'semver';
import { execSync } from 'child_process';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function getPackageJson() {
  const packageJsonPath = path.join(__dirname, '..', 'package.json');
  const packageJsonData = await fs.readFile(packageJsonPath, 'utf8');

  return JSON.parse(packageJsonData);
}

getPackageJson()
  .then((packageJson) => {
    if (!satisfies(process.version, packageJson.engines.node)) {
      console.error(
        `Required node version ${packageJson.engines.node} not satisfied with current version ${process.version}.`,
      );

      process.exit(1);
    }

    // 檢查 npm 版本，需要使用 shell 命令獲取 npm 版本
    const npmVersion = execSync('npm --version').toString().trim();

    if (!satisfies(npmVersion, packageJson.engines.npm)) {
      console.error(
        `Required npm version ${packageJson.engines.npm} not satisfied with current version ${npmVersion}.`,
      );

      process.exit(1);
    }
  })
  .catch((err) => {
    console.error('Error reading package.json:', err);

    process.exit(1);
  });
