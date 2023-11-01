// Escrever e Ler da memoria de maneira mais baixo nixo nivel

const buff = Buffer.from("ok")

console.log(buff)
// <Buffer 6f 6b>

console.log(buff.toJSON())
// { type: 'Buffer', data: [ 111, 107 ] }