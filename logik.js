console.log( null || 2 || undefined ); // 2

console.log( console.log (1) || 2 || console.log (3) ); // 1, 

console.log( 1 && null && 2 ); // 2

console.log( console.log (1) && console.log (2) ); // null

console.log( null || 2 && 3 || 4 ); // 1

const age = ('возраст')
if (age >= 14 && age <= 90)
console.log ('Всё чики') ;
else console.log ('донт');

if (!(age >= 14 && age <= 90))
if (age < 14 || age > 90) ;

if (-1 || 0) console.log( 'first' ); // -1 true
if (-1 && 0) console.log( 'second' ); // 0 false
if (null || -1 && 1) console.log( 'third' ); // 1 true 


  const user = ("кто там?");
if (user === 'admin') {

    const password = ("Пароль") ;
  if (password === 'Я главный') {

  console.log = ('Здарвствуйте!') 
  }else if (password === '' || password === null) {
  console.log = ('Отмененно') 
  }else {
  console.log = ('Неверный пароль!') }

  }else if (user === '' || user === null) {
  console.log = ('отмененно')
}else {
  console.log ('Я вас не знаю')
};