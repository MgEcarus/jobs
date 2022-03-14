const braus = 'edge';

if (braus == 'edge'){

console.log('Правильный выбор!');

}  else if (braus == 'google'
   ||braus == 'chrome'
   ||braus == 'opera'
   ||braus == 'lalala') {

console.log('Тоже хорошо!');
}
 else{
    console.log('Нету этого!');
}

const chislo = "1";
switch (chislo){
    case "0" : console.log('Тут 0');
break;
    case "1" : console.log('Тут 1');
break;
    case "2" : 
    case "3" : console.log('Тут 2, или же 3');
break;
default : console.log('Ошибка, что-то не так')
}