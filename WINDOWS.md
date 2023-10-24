# Windows 環境設定
## 裝 nvm
> https://github.com/nvm-sh/nvm#install--update-script

```shell
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.5/install.sh | bash
```

## 設定環境

> Running either of the above commands downloads a script and runs it. The script clones the nvm repository to ~/.nvm, and attempts to add the source lines from the snippet below to the correct profile file (~/.bash_profile, ~/.zshrc, ~/.profile, or ~/.bashrc).

```shell
# 編輯 .bash_profile
vi ~/.bash_profile

# 將這段貼近 .bash_profile
export NVM_DIR="$([ -z "${XDG_CONFIG_HOME-}" ] && printf %s "${HOME}/.nvm" || printf %s "${XDG_CONFIG_HOME}/nvm")"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" # This loads nvm

# 上方語法貼完後儲存，然後執行下方指令
source ~/.bash_profile
```

## 安裝 node

> wallet-client 使用 18.17 版 node

```shell
nvm install 18.17
```

## husky 初始化

> pre-commit 檢測

```shell
# 執行下方語法啟用 husky
npm run prepare
```

### 測試 pre-commit

1.  lint 沒過的狀況
2. commit message 錯誤狀況

## 檢測開發環境

```shell
# 跑測試
npm run lint

# 啟動專案
npm start
```

## vscode stylelint 設定

將下方設定貼進 .vscode/settings.json

```json
{
  "stylelint.validate": [
    "html",
    "css",
    "scss",
    "sass",
    "vue"
  ]
}
```
