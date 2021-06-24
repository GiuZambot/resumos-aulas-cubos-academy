CHCP 65001
SET arq="menu.json"
IF EXIST %arq% DEL %arq%
SET tmp="tmp"
SET dia=%date:/=-%

pause

ECHO { "status": [ { "atualizado" : "%dia%" } ], "menu": [ > %tmp%

for /d %%a in (*) do (
    ECHO { "MenuNome": "%%a"  >> %tmp% | for /d %%b in (%%a/*) do (
        @REM ECHO %%b%%brf >> %tmp% | for /d %%c in (%%a/%%b/*) do (ECHO %%c >> %tmp%) 
    )
    ECHO }, >> %tmp%
)

setlocal enabledelayedexpansion
set line=0

for /f "delims=" %%L in ( ' type %tmp% ' ) do set /a line+=1

set /a maxline=%line%-1

set line=0
for /f "delims=" %%L in ( ' type %tmp% ' ) do (
 if !line! lss %maxline% ECHO %%L >> %arq%
 set /a line+=1
)

DEL %tmp%

ECHO } >> %arq%
ECHO ] >> %arq%
ECHO } >> %arq%

@REM git add men.json
@REM git commit -m "Testesdo criador de menu %dia%"