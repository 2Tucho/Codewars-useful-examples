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

//TRANSFORM A STRING
/* The marketing team is spending way too much time typing in hashtags.
Let's help them with our own Hashtag Generator!

Here's the deal:

It must start with a hashtag (#).
All words must have their first letter capitalized.
If the final result is longer than 140 chars it must return false.
If the input or the result is an empty string it must return false. */
function generateHashtag (str) {
    let arr = str.split(" ").filter(elem => elem !== "")
    let arr1= arr.map(elem => elem[0].toUpperCase() + elem.slice(1))
    let res = arr1.join("")

    if (res.length > 0 && res.length < 140) {
        return "#" + res
    } else return false
}

//FUNCTION ARGUMENT HANDLE
/* Write a function that finds the sum of all its arguments. */
function sum() {
    let total = 0;
    for(let i in arguments){
        total += arguments[i];
    }
    return total;
}

// ORDER AND COMPARE ARRAYS
/* Background
The boardgame Risk which has been published by Hasbro, Parker Brothers, and others in a variety of guises since the late 1950's is a game of global domination or world conquest.

Battles between opposing players are fought as combats in which in the standard version of the game the attacker rolls between 1 and 3 six sided dice and the defender rolls either 1 or 2 six sided dice.

The attacking and defending players' dice are paired up in order from highest to lowest, and the dice in each pair are compared against each other.

If the attacker's die is greater than the defender's die, the defender loses one troop or army unit.

If the attacker's die is less than or equal to the defender's die, the attacker loses one troop or army unit.

Any remainining unpaired dice are ignored.

Example
The attacking player's die rolls are 2, 6 and 4.

The defending player's die rolls are 5 and 4.

The attacker's highest die roll of 6 is paired with the defender's highest die roll of 5, and the defending player loses a unit.

The attacker's next highest die roll of 4 is paired with defender's remaining die roll of 4, and the attacking player loses a unit.

The attacker's lowest die roll of 2 is ignored.

Task
Write a function which receives as inputs two arrays: one containing the attacker's die rolls in no particular order; the other the defender's die rolls again in no particular order, and returns the result of the battle as a two element array/tuple containing the numbers of units lost by the attacker and the defender respectively.

Some players who find the standard game a bit too slow paced have adopted house rules for big battles in which one or both players may be permiited to roll more than 2 or 3 dice at the same time. The function should provide for this situation, and return an appropriate outcome to the big battle. */
function battleOutcome( attacker , defender ) {
    let attDices = attacker.sort((a, b) => b - a) // To sort from bigger to smaller
    let defDices = defender.sort((a, b) => b - a)
  
    let attUnits = 0
    let defUnits = 0
  
    for(let i = 0; i < attacker.length; i++) {
      if(attDices[i] > defDices[i]) {
        attUnits += 1  
      } else if (attDices[i] <= defDices[i]) {
        defUnits += 1
      }
    }
    
    return [defUnits, attUnits]
  }