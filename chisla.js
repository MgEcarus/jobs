let a = 1, b = 1; 

let c = ++a; 
let d = b++;

require (++a) // 2
require (b++) // 2
require (c) // 2
require (d) // 1
 

    let a = 2;

    let x = 1 + (a *= 2);
    alert (x) // 5


"" + 1 + 0 = 10;
"" - 1 + 0 = -1;
true + false = 1;
6 / "3" = 2;
"2" * "3" = 23; 
4 + 5 + "px" = 10;
"$" + 4 + 5 = 10;
"4" - 2 = 2
"4px" - 2 = Nan
7 / 0 = infinity
"  -9  " + 5
"  -9  " - 5
null + 1
undefined + 1
" \t \n" - 2