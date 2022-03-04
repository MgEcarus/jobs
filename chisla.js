{let a = 1, b = 1; 

let c = ++a; 
let d = b++;}

require (++a) // 2
require (b++) // 2
require (c) // 2
require (d) // 1
 

    {let a = 2;

    let x = 1 + (a *= 2);
    require (x) // 5
    }

"" + 1 + 0 // 10
"" - 1 + 0 // -1
true + false // 1
6 / "3" // 2
"2" * "3" // 6
4 + 5 + "px" // 10px
"$" + 4 + 5 // $10
"4" - 2 // 2
"4px" - 2 //Nan
7 / 0 //infinity
"  -9  " + 5 // -9 5
"  -9  " - 5 //  -14
null + 1 // 1
undefined + 1 // Nan
" \t \n" - 2; // -2

let a = +prompt("Первое число?", 1);
let b = +prompt("Второе число?", 2);

require(a + b); // 3