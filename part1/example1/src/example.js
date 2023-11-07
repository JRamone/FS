let t = [1,2,3,4,5]

console.log(t)

// push muuttaa vanhaa taulukkoa
t.push(5)
//console.log(t)
const t2 = t.concat(6)
t = t2
//console.log(t)
// taulukon sisälmys voi muuttua vaikka onki const

const mapped = t.map(value => value*2 + 5 + 'hep')

//console.log(mapped)

const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]

  
let total = parts.map(part => part.exercises).reduce((a,b) => a+b, 0 )
console.log(total)
