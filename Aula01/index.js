// const nome = "Jose"
// const endereco = `Rua k, 12`
// const sexo = `M`
// const idade = 27

// let a = 2
// a = "abc"
// let nomeCompleto = "Joao Silva"

// console.log(nome);

// var linguagem = 'Javascript';
// console.log('Aprendendo ' + linguagem);

// var linguagem = 'java';
// console.log('Aprendendo ' + linguagem);

var idade = 28;
console.log(typeof(idade));
console.log('oi ' + nome);

if (idade >= 18){
    var nome = 'Joao'
    console.log('Parabens '+ nome);
    console.log('Voce pode dirigir');
}
console.log('até logo ' + nome);

// Coerçao implicita:

const n1 = 2;
const n2 = '5';
const n3 = n1 + n2;
console.log(n3);

// Coerçao explicita:
const n4 = n1+ Number(n2);
console.log(n4);


const v1 = [];
console.log(v1.length);
v1[0] = 3.5;
v1[10]= 'abc';
console.log(v1);
console.log(v1.length);

// List <Intenger> list = new ArrayList <>(2);
// list.add(2);
// list.add(3);
// list.add(5);

const v2 = [2, 'abc', true];


const nomes = [
    'Ana',
    'Antonio',
    'Rodrigo',
    'Alex',
    'Cristina'
]

console.log(nomes);

const apenasA = nomes.filter((n) => {
    return n.startsWith('A');
})
console.log(apenasA);

const mapeamento = nomes.map((nome) => {
    return nome.charAt(0);
})
console.log(mapeamento);

const resultado = nomes.every((n) => {
    return n.startsWith('A');
} )
console.log(resultado);