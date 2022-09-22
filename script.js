// EXERCICIO 01 VARIAVEIS
const nomeDoProduto=prompt("insira o nome do produto")
let precoDoProduto= Number (prompt("insira o preço do produto"))
precoDoProduto= precoDoProduto -1 


// console.log (`o produto ${nomeDoProduto} custa ${precoDoProduto} reais`)


// EXERCICIO 02 Operadores Aritmeticos
const num1= Number(prompt("insira um numero"))
const num2= Number(prompt("insira um segundo numero"))

console.log(`Seus numeros são  ${num1} e ${num2}`)
console.log("soma ", num1 + num2)
console.log("subtração ", num1 - num2)
console.log("multiplicação ", num1 * num2)
console.log("divisão ", num1 / num2)
console.log("Resto ", num1 % num2)



// EXERCICIO 03 Comparadores

// const numeroSorteado=4
const numeroSorteado= Math.floor(Math.random() *10) +1

const numeroRecebido= Number(prompt("insira um numero de 1 a 10"))

console.log(`seu numero sorteado foi : ${numeroSorteado}`)
 if (numeroRecebido==numeroSorteado){
    console.log("seu numero foi igual ao numero sorteado")
 } else if (numeroRecebido > numeroSorteado) {
    console.log("seu numero é maior que o numero sorteado")
 }else {
    console.log("seu numero é menor que o numero sorteado")
 }

// EXERCICIO 04 Operadores Lógicos

const idade = Number(prompt("digite sua idade"))
const autura=Number(prompt("digite sua altura em centimentros"))
const problemaCardiaco= prompt ("voce tem algum problema de cardiaco? S/N")

if (idade>=18 && autura>=160 && problemaCardiaco ==="n"){
    console.log("Pode entrar")
}else {
    console.log("não pode entrar")
}

// EXERCICIO 05 Strings

const frase = "  Hoje eu vou comer cenoura ebaaa  "

console.log (frase, frase.length)

console.log (frase.trim(), frase.length)

console.log (frase.toLowerCase())

console.log (`tem a palavra comer ? ${frase.includes("comer")}`)
console.log (`tem a palavra batata ? ${frase.includes("batata")}`)

const novaFrase = frase.replaceAll("cenoura", "batata")
console.log(novaFrase)
console.log (`tem a palavra comer ? ${novaFrase.includes("comer")}`)
console.log (`tem a palavra batata ? ${novaFrase.includes("batata")}`)

// EXERCICIO 06 arrays

const listaDeCompras = [ "batata ", "cenoura" , "beterraba"]

console.log (listaDeCompras[1])
console.log(listaDeCompras.length)
listaDeCompras.push("mandioca")
console.log(listaDeCompras)

console.log(listaDeCompras.includes("cenoura"))
listaDeCompras.splice(1,1)
console.log(listaDeCompras)

// EXERCICIO 07 Funções
const array =[ 6,7,8,9,10]
function divideDois1 ( arrayDeNumeros){
    const primeiro= arrayDeNumeros[0] /2
    const ultimo=arrayDeNumeros[arrayDeNumeros.length-1] /2

    arrayDeNumeros[0] = primeiro
    arrayDeNumeros[arrayDeNumeros.length-1]=ultimo

    return arrayDeNumeros
}

let divideDois2= function(arrayDeNumeros){
    const primeiro= arrayDeNumeros[0] /2
    const ultimo=arrayDeNumeros[arrayDeNumeros.length-1] /2

    arrayDeNumeros[0] = primeiro
    arrayDeNumeros[arrayDeNumeros.length-1]=ultimo

    return arrayDeNumeros

}

let divideDois3=(arrayDeNumeros)=>{
    const primeiro= arrayDeNumeros[0] /2
    const ultimo=arrayDeNumeros[arrayDeNumeros.length-1] /2

    arrayDeNumeros[0] = primeiro
    arrayDeNumeros[arrayDeNumeros.length-1]=ultimo

    return arrayDeNumeros

}
console.log(divideDois1(array))
console.log(divideDois2(array))
console.log(divideDois3(array))

// EXERCICIO 08 Objetos

const pessoa = {
    nome: "joana",
    idade: 30,
    generoMusical:"pop"
}
console.log(`o nome da pessoa é ${pessoa.nome} tem ${pessoa.idade} anos e o genero musical ${pessoa.generoMusical}`)

const outraPessoa ={
    ...pessoa,
    nome:"Amanda"

}
console.log(outraPessoa)

// EXERCICIO 09 Condicionais
const numero = Number(prompt("digite um numero"))

if (numero % 2 ===0){
    console.log("é par")
}else {
    console.log("é impar")
}

const bichinho = prompt("digite um bichinho")

if (bichinho==="cachorro"){
    console.log ("au au ")
}else if (bichinho==="gato"){
    console.log("miau")
}else if (bichinho==="vaca"){
    console.log("muuu")

}else {
    console.log("barulho não encontrado")
}

switch(bichinho){
    case "cachorro":
    console.log("au au")
    break;
    case "gato":
    console.log("miau")
    break;
    case "vaca":
    console.log("muuuh")
    break;
    default:
        console.log("barulho não encontrado")
}

// EXERCICIO 10 Laços

const numeros=[11,15,18,14,12,13]

let i=0
let maior=-Infinity
while(i<numeros.length){
    if (numeros[i]>maior){
        maior=numeros[i]
    }
    i++
}

for (let i=0 ; i < numeros.length; i++){
    if (numeros[i]>maior){
        maior=numeros[i]
    }

}

for (let numero of numeros){
    if (numero>maior){
        maior=numero
            }

}
console.log(`o maior numero é ${maior}`)

const prof = {
    nome: "Letícia Chijo",
    idade: 27,
    aulasFront: true,
    aulasBack: false,
    jogosFavoritos: ["Chrono Trigger", "Undertale", "Hollow Knight"],
    contaPiada: () => console.log("É pave ou pacume?"),
    pet: {
    nome: "Polly",
    especie: "cachorrinha",
    raca: "Lhasa Apso",
    snacksFavoritos: ["biscoito", "maçã", "frango"]
    }
   }

   
 const verificaAula=(aula)=>{
   if (aula){
    return "dou"
   }else{
    return"não dou"
   }
}
const aulasBack = verificaAula(prof.aulasBack)
const aulasFront = verificaAula(prof.aulasFront)
const jogos =[]

for (let i=1; i<= prof.jogosFavoritos.length;i++){
    jogos.push(`${i} ${prof.jogosFavoritos[i-1]}`)

}
console.log(jogos)

   const frase= `oi! Eu me chamo ${prof.nome} e tenho ${prof.idade} anos ${aulasFront} aulas de Front e ${aulasFront} aulas de back.
   Meus jogos favoritos são: ${jogos}
   tenho uma ${prof.pet.especie} chamada ${prof.pet.nome}  que gosta de comer ${prof.pet.snacksFavoritos[1]}`
   console.log(frase)

prof.contaPiada()

// EXERCICIO 11 map e filter
const produtos = [
    { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
    { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
    { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
    { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
    { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
    { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
    { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
    { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
    { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
    { nome: "Sabão em Pó", categoria: "Limpeza", preco: 10.80 }
   ]

   const produtosComDescontos=produtos.map((prod) =>{
    return{...prod,preco: (prod.preco*0.9).toFixed(2)}
   })

//    console.log(produtosComDescontos)

   const hortifrut=produtos.filter((prod)=>{
    return prod.categoria==="Hortifruti"
   })

//    console.log(hortifrut)

const hortifrutComDesconto= produtos.filter((prod)=>{

    return prod.categoria==="Hortifruti"
}).map((prod) =>{
    return{...prod,preco: (prod.preco*0.9).toFixed(2)}})

    console.log(hortifrut)