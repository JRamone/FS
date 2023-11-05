let t = [1,24,5]

console.log(t)

// push muuttaa vanhaa taulukkoa
t.push(5)
console.log(t)
const t2 = t.concat(6)
t = t2
console.log(t)
// taulukon sisälmys voi muuttua vaikka onki const

const mapped = t.map(value => value*2 + 5 + 'hep')

console.log(mapped)
