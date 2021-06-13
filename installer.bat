mkdir scripts
curl --output run.bat https://cuzimbisonratte.github.io/ytDownloader/run.bat
cd scripts
curl --output app.js https://cuzimbisonratte.github.io/ytDownloader/app.js
curl --output package-lock.json https://cuzimbisonratte.github.io/ytDownloader/package-lock.json
curl --output package.json https://cuzimbisonratte.github.io/ytDownloader/package.json
npm i
cd ..
del /f installer.bat
pause