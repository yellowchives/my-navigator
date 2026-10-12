@echo off
echo ========================================
echo  Building...
echo ========================================

call pnpm build
if %errorlevel% neq 0 (
    echo Build failed!
    pause
    exit /b 1
)

echo.
echo ========================================
echo  Copying to nginx...
echo ========================================

set NGINX_HTML=C:\soft\nginx-1.27.5\html
xcopy /E /Y /I "dist\*" "%NGINX_HTML%\" >nul
if %errorlevel% neq 0 (
    echo Copy failed!
    pause
    exit /b 1
)

echo.
echo ========================================
echo  Reloading nginx...
echo ========================================

cd /d C:\soft\nginx-1.27.5
nginx -s reload
if %errorlevel% neq 0 (
    echo nginx reload failed! Run as Administrator.
    pause
    exit /b 1
)

echo.
echo ========================================
echo  Done! Visit http://localhost/
echo ========================================
pause
