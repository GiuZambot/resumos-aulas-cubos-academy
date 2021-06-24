// Escopo
{
    let idade = 41;
    console.log(idade);
} // Idade foi criada nesse escopo, então é destruida aqui

let idade = 15; 
{
    // imprime 15 e não é destruida ao final do escopo
    console.log(idade);
}