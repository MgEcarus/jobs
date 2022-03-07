alert( null || 2 || undefined ); // 2

alert( alert(1) || 2 || alert(3) ); // 1, 2

alert( 1 && null && 2 ); // null

alert( alert(1) && alert(2) ); // 1, undefined

alert( null || 2 && 3 || 4 ); // 3

if ( age >= 14 && age <= 90 ) ;

if (!(age >= 14 && age <= 90)) ;
if (age < 14 || age > 90) ;

if (-1 || 0) alert( 'first' ); // -1 true
if (-1 && 0) alert( 'second' ); // 0 false
if (null || -1 && 1) alert( 'third' ); // 1 true 


  let user = prompt ("кто там?");
if (user === 'admin') {

    let prompt = password ("Пароль") ;
  if (password === 'Я главный') {

  require = ('Здарвствуйте!') 
  }else if (password === '' || password === null) {
  require = ('Отмененно') 
  }else {
  require = ('Неверный пароль!') }

  }else if (user === '' || user === null) {
require = ('отмененно')
}else {
  require = ('Я вас не знаю')
} 
