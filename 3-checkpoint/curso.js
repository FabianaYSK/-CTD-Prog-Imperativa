// importar
let Aluno = require('./aluno')
let listaAlunos = require('./listaAlunos')

/* Passo 3 - Em um arquivo diferente, crie o objeto literal curso que tem como atributos: nome do curso (string), nota de aprovação (number), faltas máximas (number) e uma lista de estudantes (um array composto pelos alunos criados no passo 1). */

let curso = {
  nomeCurso: 'Programação Imperativa',
  notaAprovacao: 7,
  faltasMaximas: 4,
  listaEstudantes: listaAlunos,

  /* Passo 4 - Crie o método que permite adicionar alunos à lista do curso, ou seja, quando chamamos nosso método em nosso objeto curso, deverá adicionar um aluno a mais na propriedade lista de estudantes do objeto curso. */

  adicionarAlunos: function (alunoNovo) {
    this.listaEstudantes.push(alunoNovo)
    // curso.adicionarAlunos(new Aluno('Aluno 6', 6, [5, 6, 7]));
  },

  /* Crie um método para o objeto curso que receba um aluno (como parâmetro) e retorne true se ele aprovou no curso ou false em caso de reprovação. Para ser aprovado, o aluno tem que ter uma média igual ou acima da nota de aprovação  e ter menos faltas que faltas máximas. Se tiver a mesma quantidade, tem que estar 10% acima da nota de aprovação. */

  aprovarAlunos: function (aluno) {
    if (
      aluno.calcularMedia() >= this.notaAprovacao &&
      aluno.faltas < this.faltasMaximas
    ) {
      return true
    } else if (
      aluno.calcularMedia() >= this.notaAprovacao * 1.1 &&
      aluno.faltas == this.faltasMaximas
    ) {
      return true // console.log(curso.aprovarAlunos());
    } else {
      return false
    }
  },

  /* Passo 6 - Crie um método para o objeto curso que percorra a lista de estudantes e retorne um array de booleanos com os resultados se os alunos aprovaram ou não. */

  listaAprovados: function () {
    let alunosAprovados = []
    for (let aluno of this.listaEstudantes) {
      if (this.aprovarAlunos(aluno) == true) {
        alunosAprovados.push(true)
      } else {
        alunosAprovados.push(false)
      }
    }
    return alunosAprovados // console.log(curso.listaAprovados());
  }
}

/* função construtora com arrow functions
function Curso(nomeCurso, notaAprovacao, faltasMaximas) {
  this.nome = nomeCurso;
  this.notaAprovacao = notaAprovacao;
  this.faltasMaximas = faltasMaximas;
  this.listaDeEstudantes = lista;
  this.adicionarAlunos = (alunoNovo) =>
    this.listaDeEstudantes.push(alunoNovo);
  this.aprovarAlunos = (aluno) => {
    if ((aluno.calcularMedia() >= this.notaDeAprovacao && aluno.faltas < this.faltasMaximas) || (aluno.calcularMedia() >= this.notaDeAprovacao * 1.1 && aluno.faltas == this.faltasMaximas)) {
      return true;
    } else {
      return false;
    }
  };
  this.listaAprovados = () =>
    this.listaDeEstudantes.filter((aluno) => this.aprovarAlunos(aluno));
}
*/
