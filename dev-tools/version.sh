if [ $(git rev-parse --abbrev-ref HEAD) == 'main' ]
then
  standard-version
  version=$( jq -r .version ./package.json )
  git push --follow-tags origin main
else
  echo "[錯誤] 建立新版本請至 main 分支進行！"
fi;
