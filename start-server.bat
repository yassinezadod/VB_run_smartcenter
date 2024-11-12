@echo off
cd /d D:\donnees\Pictures\smart-center

rem Démarrer le serveur Next.js en arrière-plan
start /B npm run prod

rem Attendre que le serveur soit disponible
timeout /t 10 /nobreak >nul

rem Ouvrir le navigateur à localhost:3000
start http://localhost:3000
