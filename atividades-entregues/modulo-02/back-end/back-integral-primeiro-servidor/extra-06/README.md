![](https://i.imgur.com/xG74tOh.png)

# Exercício extra 🌟

## Cronômetro Online

Para este exercício deverá ser criado um cronômetro online que conte minutos e segundos apenas. Para isso, deveremos criar o servidor onde será contado o tempo do cronômetro. Este servidor deverá possuir os recursos: **principal** (raiz - onde o tempo atual do cronômetro será mostrado), **iniciar**, **pausar**, **continuar** e **zerar**. A seguir especificaremos como cada recurso deverá funcionar.

O servidor deverá funcionar escutando a porta 8000, através do endereço http://localhost:8000 onde funcionará o recurso principal (raiz).

**a) Recurso principal (raiz)**

No principal recurso do servidor, acessado através de http://localhost:8000 deverá ser retornada uma mensagem mostrando o tempo atual do cronômetro, seguindo o seguinte formato:
```
Tempo atual do cronômetro: 01 minutos e 07 segundos
```
Tanto os minutos quanto os segundos deverão ser mostrados com dois dígitos, completando com zero à esquerda quando necessário.

**b) Iniciar**

O recurso iniciar será responsável por iniciar a contagem do cronômetro e aplicar toda a lógica que for necessária para que o cronômetro funcione corretamente.

Este recurso deverá ser acessado através do endereço http://localhost:8000/iniciar e não deverá receber nenhum parâmetro.

Após iniciar a contagem do cronômetro, este recurso deverá retornar a mensagem:
```
Cronômetro iniciado!
```

**Dica:** Para controlar o tempo do cronômetro no servidor pode ser utilizado o **setInterval()**.

**c) Pausar**

O cronômetro deverá também possuir um recurso para pausar o tempo do cronômetro.

Este recurso deverá ser acessado através do endereço http://localhost:8000/pausar e não deverá receber nenhum parâmetro.

Após pausar a contagem do cronômetro, este recurso deverá retornar a mensagem:
```
Cronômetro pausado!
```

**d) Continuar**

Este recurso será responsável por continuar a contagem do tempo do cronômetro.

Este recurso deverá ser acessado através do endereço http://localhost:8000/continuar e não deverá receber nenhum parâmetro.

Após continuar (resumir) a contagem do cronômetro, este recurso deverá retornar a mensagem:
```
Cronômetro continuando!
```

**e) Zerar**

Para finalizar, o cronômetro também deverá poder ser zerado através do recurso zerar.

Este recurso deverá ser acessado através do endereço http://localhost:8000/zerar e não deverá receber nenhum parâmetro.

Após zerar os valores de minutos e segundos do cronômetro, este recurso deverá retornar a mensagem:
```
Cronômetro zerado!
```

**Importante:** O recurso **zerar** não deverá afetar o estado do cronômetro e também não deverá afetar o funcionamento dos outros recursos. Portanto se o cronômetro estiver parado e o recurso **zerar** for requisitado, após zerar os valores o cronômetro deverá se manter parado. O proporcional deverá acontecer para quando o cronômetro estiver executando a contagem (zerar os valores sem parar de contar).

---

Preencha a checklist para finalizar o exercício:

- [ ] Resolver o exercício
- [ ] Adicionar as mudanças aos commits (`git add .` para adicionar todos os arquivos, ou `git add nome_do_arquivo` para adicionar um arquivo específico)
- [ ] Commitar a cada mudança significativa ou na finalização do exercício (`git commit -m "Mensagem do commit"`)
- [ ] Pushar os commits na sua branch na origem (`git push origin nome-da-branch`)

###### tags: `nodeJS` `módulo 2` `exercício de casa` `primeiro servidor` `express` `http` `setInterval`