# Windows 環境設定

> 此專案依賴 [Node.js](https://nodejs.org/en) 運行，需安裝 node 環境

## 安裝 [nvm](https://github.com/nvm-sh/nvm)

建議使用 nvm 安裝及管理 node 版本。nvm 的兩種安裝方式：

### 方法一：Git Bash + nvm (官方推薦)

- 使用 VSCode Terminal **Git Bash** 環境，依下方指示進行安裝與設定。

  ```shell
  # 參考來源：https://github.com/nvm-sh/nvm#install--update-script
  curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.5/install.sh | bash
  ```

- 設定環境

  Running either of the above commands downloads a script and runs it. The script clones the nvm repository to ~/.nvm, and attempts to add the source lines from the snippet below to the correct profile file (~/.bash_profile, ~/.zshrc, ~/.profile, or ~/.bashrc).

  ```shell
  # 編輯 .bash_profile
  vi ~/.bash_profile

  # 將這段貼近 .bash_profile
  export NVM_DIR="$([ -z "${XDG_CONFIG_HOME-}" ] && printf %s "${HOME}/.nvm" || printf %s "${XDG_CONFIG_HOME}/nvm")"
  [ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" # This loads nvm

  # 上方語法貼完後儲存，然後執行下方指令
  source ~/.bash_profile
  ```

### 方法二：[nvm-windows](https://github.com/coreybutler/nvm-windows) (非 nvm 官方插件)

- [下載](https://github.com/coreybutler/nvm-windows/releases)並安裝 nvm-windows，完成後開啟 Terminal 輸入 `nvm list` 確認 nvm 是否正常運行
- VSCode 開啟 setting.json (ctrl + P 搜尋 `C:\Users\YOUR_NAME\AppData\Roaming\Code\User\settings.json`)，加入設定後，使用 VSCode Terminal **powershell** 運行 `nvm list` 確認 nvm 是否正常運行
  ```
  "terminal.integrated.env.windows": {
    "PATH": "${env:PATH};C:\\Users\\User\\AppData\\Roaming\\nvm"
  }
  ```

## 安裝 node

```shell
# 本專案使用 22.11.0 版 node
nvm install 22.11.0

# 檢查 node 及 npm 版本
node -v # v22.11.0
npm -v # 10.9.0
```

安裝完成後即可依照 [README.md](./README.md) 說明進行開發。
