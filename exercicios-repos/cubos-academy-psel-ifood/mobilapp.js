function solucao(tempo, distancia) {
    let total = 0;

    if (tempo > 5) {
        if (tempo < 60) {
            total = (tempo * 100) + (distancia * 50);
        } else { //viagens longas
            if (distancia < 100) {
                total = 200 * distancia;
            } else {
                total = 150 * distancia;
            }
        }
    } else { //viagens menos de 5 min
        total = 600;
    }

    console.log(total);
}