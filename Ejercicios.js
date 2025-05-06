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

function collatz(n) {
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
function generateHashtag(str) {
    let arr = str.split(" ").filter(elem => elem !== "")
    let arr1 = arr.map(elem => elem[0].toUpperCase() + elem.slice(1))
    let res = arr1.join("")

    if (res.length > 0 && res.length < 140) {
        return "#" + res
    } else return false
}

//FUNCTION ARGUMENT HANDLE
/* Write a function that finds the sum of all its arguments. */
function sum() {
    let total = 0;
    for (let i in arguments) {
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
function battleOutcome(attacker, defender) {
    let attDices = attacker.sort((a, b) => b - a) // To sort from bigger to smaller
    let defDices = defender.sort((a, b) => b - a)

    let attUnits = 0
    let defUnits = 0

    for (let i = 0; i < attacker.length; i++) {
        if (attDices[i] > defDices[i]) {
            attUnits += 1
        } else if (attDices[i] <= defDices[i]) {
            defUnits += 1
        }
    }

    return [defUnits, attUnits]
}

//OBJECT PROPERTY-VALUE
/* Complete the function that returns the color of the given square on a normal, 8x8 chess board: */
function mineColor(file, rank) {
    let value = {
        a: 0,
        b: 1,
        c: 2,
        d: 3,
        e: 4,
        f: 5,
        g: 6,
        h: 7
    }

    if ((value[file] + rank) % 2 === 0) {
        return "white"
    } else return "black"
}

//RANDOM ORDER ARRAY
const shuffleArray = (arr) => {
    const shuffled = [...arr];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
};

//FILTER AND TRANSFORM A STRING
/* Given a string (str) containing a base-10 integer between 0 and 10000, convert the integer to its binary representation. At that point, obtain a count of the maximum amount of consecutive 0s. From there, return the count in written form with a capital letter.

max_consec_zeros("9") => "Two"
max_consec_zeros("13") => "One"
max_consec_zeros("15") => "Zero"
max_consec_zeros("42") => "One"
max_consec_zeros("550") => "Three"
In the very first example, we have an argument of "9" which is being passed to the method. The binary representation of 9 is 1001 which can be read as: one, zero, zero, one. There are, at most, two consecutive 0s, resulting in the integer 2 as the value of the count. The output in the block of code above reflects the final step of taking 2 from standard form to the written form "Two" as prompted.

In the very last example, we have an argument of "550" which is being passed to the method. The binary representation of 550 is 1000100110 which can be read as: one, zero, zero, zero, one, zero, zero, one, one, zero. There are, at most, three consecutive 0s, resulting in the integer 3 as the value of the count. The output in the block of code above reflects the final step of taking 3 from standard form to the written form of "Three" as prompted.

One way, among many, to visualize the end of each step might look like:

max_consec_zeros("777")
1: "777"
2: 777
3: 1100001001
4: 4
5: "Four"
max_consec_zeros("777") => "Four" */
function maxConsecZeros(n) {
    let binary = Number(n).toString(2) //To transform a number to its binary value
    let consecutiveZeros = [0] //It must have a 0 value so if no 0 are found in the binary number it doesn't result in an -infinity
    let count = 0

    for (let i = 1; i <= binary.length; i++) {
        if (binary[i] === "0") {
            count++ //Each time appears a 0 count adds 1
        } else {
            if (count > 0) { //The moment i == 1 it will take count and push it to consecutiveZeros. Then reset it to 0 
                consecutiveZeros.push(count)
                count = 0
            }
        }
    }


    let maxConsecutiveZeros = Math.max(...consecutiveZeros) //The ... are necessary in order to find the max in ALL the array

    const units = ['', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine'];
    const teens = ['Ten', 'Eleven', 'Twelve', 'Thirteen', 'Fourteen', 'Fifteen', 'Sixteen', 'Seventeen', 'Eighteen', 'Nineteen'];

    if (maxConsecutiveZeros === 0) return 'Zero';
    if (maxConsecutiveZeros < 10) return units[maxConsecutiveZeros]; //Takes a value from units depending of the value of maxConsecutiveZeros, so 2 == "Two" and so
    if (maxConsecutiveZeros < 20) return teens[maxConsecutiveZeros - 10]; //Same, by sustracting 10 we get the unit and the value
}

//OBJECT KEY-VALUE
/* Given a Hash made up of keys and values, invert the hash by swapping them. Keys and values may be of any type appropriate for use as a key.
All hashes provided as input will have unique values, so the inversion is involutive. In other words, do not worry about identical values stored under different keys. */
function invertHash(hash) {
    const obj = {};
    for (let el in hash) { //With the for in we are setting the values of the hash as keys for every pair and pushing it in the new object
        obj[hash[el]] = el;
    }
    return obj;
}

//SUM OF NUMBERS IN AN ARRAY - REDUCE
/* Write a function that takes an array of numbers and returns the sum of the numbers. The numbers can be negative or non-integer. If the array does not contain any numbers then you should return 0. 
You can assume that you are only given numbers.
You cannot assume the size of the array.
You can assume that you do get an array and if the array is empty, return 0. */
function sum(numbers) {
    return numbers.reduce((a, b) => a + b, 0); //The final 0 if the array "numbers" is empty
}


//TRANSFORM A NUMBER INTO BINARY CODE
/* Convert a number to a binary coded decimal (BCD).

You can assume input will always be an integer. If it is a negative number then simply place a minus sign in front of the output string. Output will be a string with each digit of the input represented as 4 bits (0 padded) with a space between each set of 4 bits.

Ex.

n =  10 -> "0001 0000"
n = -10 -> "-0001 0000" */
function toBcd(number) {
    let num = ("" + number).split("").map(num => Number(num).toString(2)); //Number to string and string to array. Then in each element we get its respective binary code

    for (let i = 0; i < num.length; i++) {
        let numLength = num[i].length;
        if (numLength < 4) { //If the binary code length is lesser than 4 we must fill with zeros before the number. This way we substract 4 and the length so we get the number of 0 we need and we add them
            let zeros = "";
            for (let j = 0; j < 4 - numLength; j++) {
                zeros += "0";
            };
            num[i] = zeros + num[i];
        } else num[i] = "" + num[i]; //If the length is 4 then we want to converti it to strring again
    };

    let res = [];
    if (number < 0) {
        num.shift(); //Is the number is negative, the "-" symbol from the original argument equals a NaN at this point. With .shift we got that not desirable result out
        res = "-" + num.join(" "); //Then add the "-" and the array becomes an string in which elements are separated by an space, as in the examples
    } else res = num.join(" ");
    return res
}
//PRO version
function toBcd(number) {
    return (number < 0 ? '-' : '') + Math.abs(number).toString().split('').map(d => (+d + 16).toString(2).slice(1)).join(' ');
}