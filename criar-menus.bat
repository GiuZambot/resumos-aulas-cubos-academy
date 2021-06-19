set arq="teste.html"

echo "<p>Atualizado: em %date%</p>" > %arq%

SET atual="<p>Atualizado: em</p>"

SET Quoted="{Atualizado: ()em"

FOR /F "delims=" %%I IN (%Quoted%) DO SET Unquoted=%%I

ECHO %Unquoted% >> %arq%

@REM for /f "tokens=1,2,3 delims=/" %%a in ("%date%") do (echo Ano - %%c Mes - %%b Dia - %a)

@REM set /P teste=promptString
@REM echo "%teste%" >> teste.html

@REM if %teste% equ 1 (echo "Deu um" >> %arq%)

@REM for %%x in (a,b,c) do echo %%x >> %arq%

@REM for /d /r %%a in (*) do (echo %%a >> %arq%)

@REM for /d %%a in (*) do (echo "<li onclick=jax('%%a/index')> %%a </li>" >> %arq% | dir "./%%a" >> %arq%)

set ini="<li onclick=jax"

@REM for /d %%a in (*) do (echo %ini%%%a >> %arq% | for /d %%b in (%%a/*) do (echo %%b >> %arq% | for /d %%c in (%%a/%%b/*) do (echo %%c >> %arq%) )
)

@REM for /d %%b in (*) do (echo "%%b" >> %arq% )

@REM FOR /L %%i IN (1,1,5) DO (ECHO %%i >> %arq%)