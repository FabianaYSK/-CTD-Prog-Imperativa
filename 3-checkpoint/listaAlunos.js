/* Continuação Passo 1 - criação de alunos */

let Aluno = require('./aluno')

let aluno1 = new Aluno('Aluno 1', 1, [9, 8, 8])
let aluno2 = new Aluno('Aluno 2', 2, [8, 7, 9])
let aluno3 = new Aluno('Aluno 3', 3, [9, 7, 8])
let aluno4 = new Aluno('Aluno 4', 4, [9, 9, 7])
let aluno5 = new Aluno('Aluno 5', 5, [5, 5, 5])

let listaAlunos = [aluno1, aluno2, aluno3, aluno4, aluno5]

// console.log(listaAlunos);

module.exports = { listaAlunos }
