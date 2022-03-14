console.log( null || 2 || undefined ); // 2

console.log( console.log (1) || 2 || console.log (3) ); // 1, 2

console.log( 1 && null && 2 ); // null

console.log( console.log(1) && console.log(2) ); // 1 , inderfined

console.log( null || 2 && 3 || 4 ); // 3

const age = ('возраст')
if (age >= 14 && age <= 90)
console.log ('Всё чики') ;
else console.log ('донт');

let agee = 13 ;
console.log(!(agee >= 14))
if (!(agee >= 14 && agee <= 90)) 
console.log('okey') ;
else console.log('dont agee')


if (-1 || 0) console.log( 'first' ); // -1 true
if (-1 && 0) console.log( 'second' ); // 0 false
if (null || -1 && 1) console.log( 'third' ); // 1 true 


  const user = 'admin';
  if (user === 'admin') { 

    const password = 'Я главный' ;
  if (password === 'Я главный') {

  console.log('Здарвствуйте!') 
  }else if (password === '' || password === null) {
  console.log('Отмененно') 
  }else {
  console.log('Неверный пароль!') }

  }else if (user === '' || user === null) {
  console.log('отмененно')
}else {
  console.log('Я вас не знаю')
};