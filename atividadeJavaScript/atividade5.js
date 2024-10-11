let prova1 = parseFloat(prompt(`Qual foi a sua nota na primeira prova?`))

let prova2 = parseFloat(prompt(`E na segunda prova?`))

let media = (prova1 + prova2) / 2

let res = media >= 6 ? "Aluno Aprovado" : "Aluno Reprovado"

alert(`A media final é igual a: ${media}.`)

