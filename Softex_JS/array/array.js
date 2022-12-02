var arrayLista = ["Ontem", "Hoje", "Amanha"];

console.log(arrayLista.toString())
console.log(arrayLista.join(" - ")) 

console.log('')
const students = [
    { name: 'Jake', score: 6.4},
    { name: 'Jake', score: 8.6},
    { name: 'Jake', score: 9.4},
    { name: 'Jake', score: 9.1},
]

const greatStudent = student => student.score >= 9
const greatName = student => student.name

console.log(students.filter(greatStudent))// dentro do Array students filtre as notas maior ou igual a 9 (arrow function greatStudent)
console.log(students.filter(greatName))