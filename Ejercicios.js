/* EJERCICIOS ÚTILES DE JAVASCRIPT */

//WHILE LOOP EXAMPLE
/*A collatz sequence, starting with a positive integern, is found by repeatedly applying the following function to n until n == 1 :

f(n)={ n/2, if n is even
       3n+1, if n is odd

A more detailed description of the collatz conjecture may be found on Wikipedia.

The Problem
Create a function collatz that returns a collatz sequence string starting with the positive integer argument passed into the function, in the following form:

"X0->X1->...->XN"

Where Xi is each iteration of the sequence and N is the length of the sequence.

Sample Input
    Input: 4
    Output: "4->2->1"

    Input: 3
    Output: "3->10->5->16->8->4->2->1"

Don't worry about invalid input. Arguments passed into the function are guaranteed to be valid integers >= 1.*/

function collatz(n){
    let num = n; // Initialize num with the input value
    let res = `${num}`; //Res will contain the final answer, starting with the input value

    while (num !== 1) { // Loop until num becomes 1
        if (num % 2 === 0) {
        num = num / 2; // If num is even, divide it by 2
        res += "->" + num; // Append the new value to res 
        } else {
        num = num * 3 + 1; // If num is odd, multiply it by 3 and add 1
        res += "->" + num;
        }
    }

    return res
}


//ROUND NUMBERS EXAMPLE
/*Round any given number to the closest 0.5 step

I.E.

solution(4.2) = 4
solution(4.3) = 4.5
solution(4.6) = 4.5
solution(4.8) = 5
Round up if number is as close to previous and next 0.5 steps.

solution(4.75) == 5

Input	Step 1 (×2)	Step 2 (round)	Step 3 (/2)	Result
1.2	    2.4	        2	            1.0	        1.0
1.3	    2.6	        3	            1.5	        1.5
1.7	    3.4	        3	            1.5	        1.5
1.8	    3.6	        4	            2.0	        2.0
2.5	    5.0	        5	            2.5	        2.5*/

let solution = n => (Math.round(n * 2)) / 2 //Multiply by 2, round to the nearest integer, and divide by 2 to get the final result


//FILTER AN ARRAY
/*convierto a str n y luego a array
hago Math.max(...array) para saber cuál es el mayor
lo quito del array
lo hago tantas veces como k
return del array.join("")*/

function solve(n, k) {
  let arr = n.toString().split("")
  for (let i = 0; i < k; i++) {
    arr = arr.filter(elem => elem < Math.max(...arr)) //Retorno los menores que el máximo para filtrar sin trastocar el orden
  }
  return arr.join("")
};

//FACTORIAL NUMBER
function factorial(n) {
    let res = 1
    for (let i = 1; i <= n; i++) {
      res *= i
    }
    return res
  };