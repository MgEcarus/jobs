let i = 3;

while (i) {
  console.log( i-- ); // 3 2 1
}

let x = 0;
while (++x < 5) console.log( x ); // 1 2 3 4 

let h = 0;
while (h++ < 5) console.log( h ); // 1 2 3 4 5

for (let i = 2; i < 10; i += 2) {
  console.log( '------' )
  console.log( i + 2) //4 6 8 10
  console.log( i ) //2 4 6 8
}

for (let i = 0; i < 5; ++i) {
console.log( i ); // 0 1 2 3 4
}


for (let g = 2; g <= 10; g++) { 
    if (g % 2 === 1){ 
      continue;
    }  
    console.log(g); 
}

let b = 0; 
while (b < 3) {
console.log( `nomer ${b}!` ) // nomer 0, 1, 2
b++;
}


let lo;
do {
lo = ('Введите число больше 100');
} while (lo <= 100);
console.log('win')


labelName: for (let z = 2; z < 10; z++) {

for (let d = 2; d < z; d++){
if (z % d == 0) continue labelName; 
}
console.log(z) // 2,3,5,7
}