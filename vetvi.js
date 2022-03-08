if ("0") {
    console.log( 'Привет' ); // true
  }

  let company = ('какая компания создала javascript?', '');

  if (company == 'ECMAScript') {
      console.log('верно');
} else {
      console.log('Не знаете? ECMAScript!');
}

  let age = ('число', 0);

 if (age > 0) {
      console.log('1')
}else if (age < 0) {
      console.log('-1')
}else {
      console.log('0')
  }

  let result = (1 + 2 < 4) ? 'Мало' : 'Много';

  let login = ('Кто вы?');
  let message = (login == 'сотрудник')? 'Привет' :
  (login == 'Директор') ? 'Здравствуйте!' :
  ('Нет логина') ;
  console.log (message)