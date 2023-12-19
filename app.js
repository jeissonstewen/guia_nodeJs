/* console.log('hello world');

const message = 'hello world'

console.log(message); */

const fs = require('fs') //importamos filesystem

const data = fs.readFileSync('README.md', 'utf8')
const newData = data.replace(/casi/ig, 'reemplazo')
// fs.writeFileSync('readme2.md', newData) //creando nuevo archivo realizando los cambios
/* console.log(data);
console.log(newData); */

const wordCount = data.split(' ')
/* console.log('palabras: ',wordCount.length);
console.log(wordCount); */
let cont = 0;
const reactWordCount = ()=>{
    wordCount.forEach(e => {
        if(e == 'de')
        cont = cont +1
        
    })
    return cont
}
/* console.log('palabras casi: ',reactWordCount()); */

const contador = data.match(/de/gi ?? []).length // expresion regular para encontrar la palabra -de-

console.log(contador);


setTimeout(() => {
    console.log('hola despues de 3 s');
}, 3000);

setTimeout(() => {
    console.log('hola despues de 1 s');
}, 1000);

setTimeout(() => {
    console.log('hola');
}, 0);

console.log('antes que cero');
