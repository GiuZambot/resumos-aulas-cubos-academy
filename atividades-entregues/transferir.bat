robocopy . C:\reposit\resumos-aulas-cubos-academy\atividades-entregues /e /purge /xd node_modules /xd public /xd .git /xd .vscode /xf .gitignore
cd C:\reposit\resumos-aulas-cubos-academy
git status
git add .
git commit -m "Exercicio entregues/alterados %date%"
git push

pause
