// Manipulação de Objetos
// Objetos com propriedades e métodos que manipulam essas 

const carro = {
    ligado: false,
    velocidade: 0,
    ligar: function () {
        this.ligado ? (
            console.log("Este carro já está ligado")
        ) : (
            this.ligado = true,
            this.status()
        );
    },
    desligar: function () {
        !this.ligado ? (
            console.log("Este carro já está desligado")
        ) : (
            this.ligado = false,
            this.velocidade = 0,
            this.status()
        );
    },
    acelerar: function () {
        this.ligado ? (
            this.velocidade += 10,
            this.status()
        ) : (
            console.log("Não é possível acelerar um carro desligado.")
        );
    },
    desacelerar: function () {
        this.ligado ? (
            this.velocidade -= 10,
            this.status()
        ) : (
            console.log("Não é possível acelerar um carro desligado.")
        );
    },
    status: function () {
        console.log(`Carro ${this.ligado ? "Ligado" : "desligado"}. Velocidade:${this.velocidade}.`);
    }
}

carro.desligar();
carro.ligar();
carro.ligar();
carro.acelerar();
carro.acelerar();
carro.desacelerar();
carro.desligar();
carro.acelerar();
carro.desacelerar();