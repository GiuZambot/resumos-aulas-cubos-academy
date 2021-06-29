const nomeArquivo = ["Foto da Familia.pdf", "Foto da Familia.png", "Fotos.txt", "imagem.gif"];

const arquivosPermitidos = [".jpg", ".jpeg", ".gif", ".png"];

function validarArquivo(arquivo) {
    // verifica se a extensão do arquivo está presente na array de arquivos permitodos
    const permitido = arquivosPermitidos.some(elem => arquivo.slice(-5).includes(elem));

    if (permitido) {
        console.log("Arquivo válido");
    } else {
        console.log("Arquivo inválido.");
    }
}

for (const i of nomeArquivo) {
    validarArquivo(i);
}