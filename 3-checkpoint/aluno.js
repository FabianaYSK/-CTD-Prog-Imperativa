/* Passo 1 - Crie um objeto aluno que tenha como atributos: nome (string), quantidade de faltas (number) e notas (array de números). Crie um construtor para ele e importe-o como o módulo aluno. */

// função para gerar objetos
function Aluno(nomeAluno, faltasAluno, notasAluno) {
  this.nome = nomeAluno
  this.faltas = faltasAluno
  this.notas = notasAluno

  /* Passo 2 - Nosso objeto aluno terá o método calcularMedia que retorna a média de suas notas. Também terá um método chamado faltas, que simplesmente aumenta o número de faltas em 1. */

  this.calcularMedia = function () {
    let total = 0
    for (i = 0; i < this.notas.lenght; i++) {
      total = total + this.notas[i]
    }
    return total / this.notas.lenght
  }
  this.adicionarFaltas = function () {
    let faltas = 0
    for (let aluno of this.alunos) {
      faltas++
    }
    return (faltas = faltas + 1)
  }
}

/* arrow function: 
function Aluno(nomeAluno,faltasAluno,notasAluno) {
  this.nome = nomeAluno
  this.faltas = faltasAluno
  this.notas = notasAluno
  this.calcularMedia = () => {
   let total = 0;
    for(nota of this.notas) {
      total += nota
    }
    return total/this.notas.lenght; 
  }  
  this.adicionarFaltas = () => this.faltas++  
}
*/

/* Continuação Passo 1 - "importe-o como o módulo aluno" */
module.exports = Aluno
