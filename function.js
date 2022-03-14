function checkAge(age) {
    if (age > 18) {
      return true;
    } else {
      return ('Родители разрешили?');
    }
    }let lol = checkAge(19)
  console.log(lol)


function checkAge(age) {
    if (age > 18) {
      return true;
    }
    return ('Родители разрешили?');
    }let arr = checkAge(19)
  console.log(arr); // Оба работают, одинаково. 

function lal(age) {
      return (age > 18 ? 'Можно' : 'маленький');
    }let lall = lal(14)
  console.log(lall)

function lal(age) {
    return (age > 18 
        || 'Можно'
        || 'маленький');
    }let lali = lal(14)
  console.log(lali)

function min (a , b) {
        return (a < b) ? a : b;
}console.log(min (2 , 5)) //2
console.log(min (3 , -1)) //-1
console.log(min (1 , 1)) //1

let x = ('3');
let y = ('2');
function pow (x , y) {
  return x**y;
}
if (y % 1 == 0 && y > 1) {
  console.log(pow(x , y)) // 9
}else {
  console.log('ne natur chislo n')
}
