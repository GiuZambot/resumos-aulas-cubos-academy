CHCP 65001
SET arq="menu.json"
SET dia=%date:/=-%

echo { "status": [ { "atualizado" : "%dia%" } ], "menu": [ > %arq%

for /d %%a in (*) do (
    echo { "MenuNome": "%%a"  >> %arq% | for /d %%b in (%%a/*) do (
        @REM echo %%b%%brf >> %arq% | for /d %%c in (%%a/%%b/*) do (echo %%c >> %arq%) 
    )
    echo }, >> %arq%
)

ECHO ] } >> %arq%

git add men.json
git commit -m "Testesdo criador de menu %dia%"