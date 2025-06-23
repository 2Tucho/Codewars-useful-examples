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

//FILTER ARRAY AND TRANSFORM IT
/* The odd and even numbers are fighting against each other!

You are given a list of positive integers. The odd numbers from the list will fight using their 1 bits from their binary representation, while the even numbers will fight using their 0 bits. If present in the list, number 0 will be neutral, hence not fight for either side.

You should return:

odds win if number of 1s from odd numbers is larger than 0s from even numbers
evens win if number of 1s from odd numbers is smaller than 0s from even numbers
tie if equal, including if list is empty
Please note that any prefix that might appear in the binary representation, e.g. 0b, should not be counted towards the battle.

Example:
For an input list of [5, 3, 14]:

odds: 5 and 3 => 101 and 11 => four 1s
evens: 14 => 1110 => one 0
Result: odds win the battle with 4-1 */
function bitsBattle(numbers) {
    let odds = []
    let evens = []

    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] === 0) {
            null
        } else if (numbers[i] % 2 === 0) {
            evens.push(numbers[i])
        } else odds.push(numbers[i])
    }

    odds = odds.map(num => num.toString(2)).join("")
    evens = evens.map(num => num.toString(2)).join("")

    let zeroCount = 0
    let oneCount = 0

    for (let i = 0; i < odds.length; i++) {
        if (odds[i] === "1") {
            oneCount++
        }
    }
    for (let i = 0; i < evens.length; i++) {
        if (evens[i] === "0") {
            zeroCount++
        }
    }

    if (zeroCount > oneCount) {
        return "evens win"
    } else if (zeroCount < oneCount) {
        return "odds win"
    } else return "tie"
}

//COMPARE STRINGS
/* Give you two strings: s1 and s2. If they are opposite, return true; otherwise, return false. Note: The result should be a boolean value, instead of a string.

The opposite means: All letters of the two strings are the same, but the case is opposite. you can assume that the string only contains letters or it's a empty string. Also take note of the edge case - if both strings are empty then you should return false/False.

Examples (input -> output)
"ab","AB"     -> true
"aB","Ab"     -> true
"aBcd","AbCD" -> true
"AB","Ab"     -> false
"",""         -> false */
function isOpposite(s1, s2) {
    if (s1.length == 0 || s2.length == 0 || s1.length !== s2.length) {
        return false;
    };
    let upper1 = s1.toUpperCase();
    let upper2 = s2.toUpperCase();
    let count = 0;
    for (let i = 0; i < s1.length; i++) {
        if (upper1[i] == upper2[i] && s1[i] !== s2[i]) {
            count++;
        }
    }
    if (count == s1.length) {
        return true;
    } else return false;
}

//BUBBLE SORT. SORT WITHOUT METHODS
function bblSort(arr) {

    for (var i = 0; i < arr.length; i++) {

        // Last i elements are already in place  
        for (var j = 0; j < (arr.length - i - 1); j++) {

            // Checking if the item at present iteration 
            // is greater than the next iteration
            if (arr[j] > arr[j + 1]) {

                // If the condition is true
                // then swap them
                var temp = arr[j]
                arr[j] = arr[j + 1]
                arr[j + 1] = temp
            }
        }
    }

    // Print the sorted array
    return arr;
}


//SUM OF MULTIPLES NUMBERS
/* Return the sum of the multiples of 3 and 5 below a number. Your solution should work for really large numbers (greater than 1,000,000). */
function sumMultiplesOf3And5(n) {
    // Calculate the number of terms below n for 3, 5, and 15
    const numTerms = (k) => Math.floor((n - 1) / k);

    // Sum of an arithmetic series: S = k * m * (m + 1) / 2
    const sum = (k) => k * numTerms(k) * (numTerms(k) + 1) / 2;

    // ' 15 To avoid double-counting numbers divisible by both 3 and 5
    return sum(3) + sum(5) - sum(15);
}


//PROPERTY-VALUE HANDLE
function testit(s) {
    const letters = {
        a: 1, b: 2, c: 3, d: 4, e: 5, f: 6, g: 7, h: 8, i: 9, j: 10, k: 11, l: 12, m: 13,
        n: 14, o: 15, p: 16, q: 17, r: 18, s: 19, t: 20, u: 21, v: 22, w: 23, x: 24, y: 25, z: 26
    };

    // Create reverse mapping
    const numbersToLetters = {};
    for (const key in letters) {
        numbersToLetters[letters[key]] = key;
    }

    const convertedLetters = s.split("").map(elem => letters[elem]);
    const numArray = [];

    for (let i = 0; i < convertedLetters.length; i += 2) {
        let avg;
        // Handle odd-length case - use the last number as is
        if (i + 1 >= convertedLetters.length) {
            avg = convertedLetters[i];
        } else {
            avg = (convertedLetters[i] + convertedLetters[i + 1]) / 2;
        }
        numArray.push(Math.floor(avg));
    }

    // Convert numbers back to letters, filtering out undefined values
    const finalLetters = numArray
        .map(num => numbersToLetters[num])
        .filter(letter => letter !== undefined)
        .join("");

    return finalLetters;
}

testit("abc"); // "ac" (average of a(1) and b(2) is 1.5 → floor(1.5)=1. c is left alone so it adds up to the result as it is)

// TRANSFORM STRINGS
/* Solve the horror of unstandardized keypads by providing a function that converts computer input to a number as if it was typed on a phone.

Example:
"789" -> "123"

Notes:
You get a string with numbers only */
function computerToPhone(numbers) {
    let equivalence = {
        0: 0, 1: 7, 2: 8, 3: 9, 4: 4, 5: 5, 6: 6, 7: 1, 8: 2, 9: 3
    }
    let result = ""
    for (let i = 0; i < numbers.length; i++) {
        result += equivalence[numbers[i]]
    }
    return result
}

//STRING TRANSFORMATION
/* Write a function that takes in a string and replaces all the letters with their respective positions in the English alphabet; e.g. 'a' is 1, 'z' is 26. The function should be case-insensitive. */
function encode(str) {
    const letters = {
        a: 1, b: 2, c: 3, d: 4, e: 5, f: 6, g: 7, h: 8, i: 9, j: 10, k: 11, l: 12, m: 13, n: 14, o: 15, p: 16, q: 17, r: 18, s: 19, t: 20, u: 21, v: 22, w: 23, x: 24, y: 25, z: 26
    };
    let result = str.split("").map(elem => {
        if (letters[elem.toLowerCase()] === undefined) {
            return elem;
        } else return letters[elem.toLowerCase()];
    })
    return result.join("");
}

//ARRAY FILTER
/* It's Friday the 13th, and Jason is ready for his first killing spree!

Create a function, killcount, that accepts two arguments: an array of array pairs (the conselor's name and intelligence - ["Chad", 2]) and an integer representing Jason's intellegence.

JavaScript:
let counselors = [["Chad", 2], ["Tommy", 6], ["Michael", 11]];
let jason = 7;
output // ["Chad", "Tommy"]

Your function must return an array of the names of all the counselors who can be outsmarted and killed by Jason. */
function killcount(counselors, jason) {
    let names = [];
    for (let i = 0; i < counselors.length; i++) {
        if (counselors[i][1] < jason) {
            names.push(counselors[i][0])
        }
    }
    return names
}

//REGEX
/* Write a function that accepts a string, and returns true if it is in the form of a phone number.
Assume that any integer from 0-9 in any of the spots will produce a valid phone number.

Only worry about the following format:
(123) 456-7890 (don't forget the space after the close parentheses) */
function validPhoneNumber(phoneNumber) {
    return /^\(\d{3}\)\S\d{3}\-\d{4}$/.test(phoneNumber);
    /* Must star with 3 numbers in a parenthesis, followed by an space, another 3 numbers and a - and finish with 4 numbers */
}

//FILTER ELEMENTS IN AN ARRAY
/* Determine whether a non-negative integer number is colorful or not.

263 is a colorful number because [2, 6, 3, 2*6, 6*3, 2*6*3] are all different; whereas
236 is not colorful, because [2, 3, 6, 2*3, 3*6, 2*3*6] has 6 twice.

So take all consecutive subsets of digits, take their products, and ensure all the products are different.

Examples
263  -->  true
236  -->  false */
function colourful(number) {
    const str = (number + "").split("")
    const arr = []
    for (let i = 0; i < str.length; i++) {
        arr.push(str[i])
    }
    for (let i = 0; i < str.length - 1; i++) {
        arr.push(str[i] * str[i + 1])
    }
    const res = arr.map(elem => Math.abs(elem))
        .filter((item, index, array) => array.indexOf(item) !== index) // Filter to fin the element that are repeated in an array
    if (res.length > 0) {
        return false
    } else return true
}

// ARRAY FILTER
/* In this Kata, you will be given two strings a and b and your task will be to return the characters that are not common in the two strings.

For example:

solve("xyab","xzca") = "ybzc" 
--The first string has 'yb' which is not in the second string. 
--The second string has 'zc' which is not in the first string. 
Notice also that you return the characters from the first string concatenated with those from the second string. */
function solve(a, b) {
    const arrA = a.split("");
    const arrB = b.split("");

    //The filter searches each letter in the original string with the includes string method. It will leave only the letters that aren't there
    const notCommonA = arrA.filter(letter => !b.includes(letter));
    const notCommonB = arrB.filter(letter => !a.includes(letter));

    return notCommonA.concat(notCommonB).join("");
}

//ARRAY MAP, FILTER AND REDUCE
/* Find the sum of the odd numbers within an array, after cubing the initial integers. The function should return undefined if any of the values aren't numbers.

cubeOdd([1, 2, 3, 4]) //28
cubeOdd([-3,-2,2,3]) //0
cubeOdd(["a",12,9,"z",42]) //undefined
*/
function cubeOdd(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr.length == 0 || typeof arr[i] !== "number") {
            return undefined
        }
    }
    return arr.map(num => num * num * num)
        .filter(num => Math.abs(num) % 2 == 1)
        .reduce((acc, val) => acc + val)
}

//FUNCTION ARGUMENTS
/* Complete the function which will help you compute a geometric progression / series.

The parameters provided are as follows:

a is the first term
r is the common ratio
n is the amount of terms
Example:

a = 2, r = 3, n = 5 should return 242. */
function GeometricSequenceSum(a, r, n) {
    let arr = [a]
    let count = a

    for (let i = 0; i < n - 1; i++) { // n - 1 because I have already set the first element in arr
        count = count * r
        arr = arr.concat(count)
    }

    return arr.reduce((acc, val) => acc + val)
}

//ARRAY FILTER
/* Filter elements where the count of the element in the array is even.
Test Case:
balancedFilter(['a', 'b', 'b', 'a', 'c', 'd', 'd']);  Should return ['a', 'b', 'd'] (each appears 2x) */
const balancedFilter = (arr) => {
    let count = 0
    let res = []

    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (arr[i] === arr[j]) {
                count++
            }
        }
        if (count % 2 === 0) {
            if (res.includes(arr[i])) {
                count = 0
            } else {
                res.push(arr[i])
                count = 0
            }
        } else count = 0
    }
    return res
}

//ARRAY TRANSFORM
/* Implement a function, so it will produce a sentence out of the given parts.

Array of parts could contain:

words;
commas in the middle;
multiple periods at the end.
Sentence making rules:

there must always be a space between words;
there must not be a space between a comma and word on the left;
there must always be one and only one period at the end of a sentence.
Example:

makeSentence(['hello', ',', 'my', 'dear']) // returns 'hello, my dear.' */
function makeSentence(parts) {
    let string = parts.filter(elem => elem !== " " && elem !== ".").join(" ")
    let res = ""
    for (let i = 0; i < string.length; i++) {
        if (string[i + 1] == ",") {
            null
        } else res += string[i]
    }

    return res + "."
}

//ARRAY FILTER
/* Greed is a dice game played with five six-sided dice. Your mission, should you choose to accept it, is to score a throw according to these rules. You will always be given an array with five six-sided dice values.

 Three 1's => 1000 points
 Three 6's =>  600 points
 Three 5's =>  500 points
 Three 4's =>  400 points
 Three 3's =>  300 points
 Three 2's =>  200 points
 One   1   =>  100 points
 One   5   =>   50 point
A single die can only be counted once in each roll. For example, a given "5" can only count as part of a triplet (contributing to the 500 points) or as a single 50 points, but not both in the same roll.

Example scoring

 Throw       Score
 ---------   ------------------
 5 1 3 4 1   250:  50 (for the 5) + 2 * 100 (for the 1s)
 1 1 1 3 1   1100: 1000 (for three 1s) + 100 (for the other 1)
 2 4 4 5 4   450:  400 (for three 4s) + 50 (for the 5)
Note: your solution must not modify the input array. */
function score(dice) {
    let out = 0;
    for (let j = 2; j <= 6; j++) {
        if (dice.filter(i => i === j).length > 2) out += j * 100; //From 2-6 the only points given are for trios of each number
    }
    //The only exceptions are 1 and 5
    let one = dice.filter(i => i === 1);
    let five = dice.filter(i => i === 5);
    if (one.length > 2) out += 1000; //For a 1 trio. 
    out += (one.length % 3) * 100; //If 1 returns 1, if 2 returns 2, with 3 returns 0. It repeats since then (for 4 returns 1, 5 returns 2, 6 returns 0...)
    out += (five.length % 3) * 50;
    return out;
}

//DAILY CODING PROBLEMS (MEDIUM)
/* Write an algorithm to justify text. Given a sequence of words and an integer line length k, return a list of strings which represents each line, fully justified.

More specifically, you should have as many words as possible in each line. There should be at least one space between each word. Pad extra spaces when necessary so that each line has exactly length k. Spaces should be distributed as equally as possible, with the extra spaces, if any, distributed starting from the left.

If you can only fit one word on a line, then you should pad the right-hand side with spaces.

Each word is guaranteed not to be longer than k.

For example, given the list of words ["the", "quick", "brown", "fox", "jumps", "over", "the", "lazy", "dog"] and k = 16, you should return the following:

["the  quick brown", # 1 extra space on the left
"fox  jumps  over", # 2 extra spaces distributed evenly
"the   lazy   dog"] # 4 extra spaces distributed evenly */
function justifyText(words, k) {
    const result = [];
    let currentLine = [];
    let currentLength = 0;

    // Step 1: Group words into lines
    for (const word of words) {
        if (currentLine.length === 0) {
            // First word in the line
            if (word.length <= k) {
                currentLine.push(word);
                currentLength = word.length;
            }
        } else {
            // Check if adding another word fits
            if (currentLength + 1 + word.length <= k) {
                currentLine.push(word);
                currentLength += 1 + word.length; // +1 for the space
            } else {
                // Process the current line and start a new one
                result.push(justifyLine(currentLine, k));
                currentLine = [word];
                currentLength = word.length;
            }
        }
    }
    // Add the last line (left-justified)
    if (currentLine.length > 0) {
        result.push(leftJustify(currentLine, k));
    }
    return result;
}

function justifyLine(words, k) {
    if (words.length === 1) {
        return leftJustify(words, k);
    }
    const totalSpaces = k - words.reduce((sum, word) => sum + word.length, 0);
    const gaps = words.length - 1;
    const baseSpace = Math.floor(totalSpaces / gaps);
    let extraSpaces = totalSpaces % gaps;
    let line = words[0];
    for (let i = 1; i < words.length; i++) {
        const spaces = baseSpace + (extraSpaces-- > 0 ? 1 : 0);
        line += ' '.repeat(spaces) + words[i];
    }
    return line;
}

function leftJustify(words, k) {
    const line = words.join(' ');
    return line + ' '.repeat(k - line.length);
}

// Example usage
const words = ["the", "quick", "brown", "fox", "jumps", "over", "the", "lazy", "dog"];
const k = 16;
console.log(justifyText(words, k));
// Output:
// ["the  quick brown", "fox  jumps  over", "the   lazy   dog"]

//DAILY CODING PROBLEMS (EASY)
/* Given a string of round, curly, and square open and closing brackets, return whether the brackets are balanced (well-formed).

For example, given the string "([])[]({})", you should return true.

Given the string "([)]" or "((()", you should return false. */
function isBalanced(s) {
    /**+ We can use a stack (like a pile of plates) to keep track of the opening brackets:
When we see an opening bracket, we push it onto the stack.
When we see a closing bracket, we pop the top of the stack and check if it matches the closing bracket.
If it doesn’t match, the string is unbalanced.
If we finish the string and the stack is empty, all brackets are balanced. */
    const stack = [];
    const bracketPairs = {
        ')': '(',
        '}': '{',
        ']': '['
    }; // A dictionary maps each closing bracket to its opening counterpart.
    const openingBrackets = new Set(['(', '{', '[']);

    for (const char of s) {
        if (openingBrackets.has(char)) { // If each character of s has an opening bracket this goes pushed to stack
            stack.push(char); // Push opening brackets
            // If it hasn't is a closing bracket            
        } else {
            // If stack is empty or top doesn't match, return false. If it matches, it pops that opening bracket and keeps the loop
            if (stack.length === 0 || stack[stack.length - 1] !== bracketPairs[char]) {
                return false;
            }
            stack.pop();
        }
    }

    return stack.length === 0; // If the stack is empty, all brackets were properly matched and closed.
}

// Test cases
console.log(isBalanced("([])[]({})")); // true
console.log(isBalanced("([)]"));       // false
console.log(isBalanced("((()"));       // false

//DAILY CODING PROBLEMS (MEDIUM)
/* Given an array of integers, return a new array such that each element at index i of the new array is the product of all the numbers in the original array except the one at i. For example, if our input was [1, 2, 3, 4, 5], the expected output would be [120, 60, 40, 30, 24]. If our input was [3, 2, 1], the expected output would be [2, 3, 6].
Follow-up: what if you can't use division? */
const integersProductsWithDivision = (array) => {
    let res = []

    for (let i = 0; i < arr.length; i++) {
        res.push(arr.reduce((acc, val) => acc * val) / arr[i])
    }

    return res
}

//DAILY CODING PROBLEMS (MEDIUM)
/* Implement an autocomplete system. That is, given a query string s and a set of all possible query strings, return all strings in the set that have s as a prefix.
For example, given the query string de and the set of strings [dog, deer, deal], return [deer, deal].
Hint: Try preprocessing the dictionary into a more efficient data structure to speed up queries. */
const filterStringsByPrefix = (prefix, array) => arr.filter(elem => elem.slice(0, prefix.length) === prefix)

//DAILY CODING PROBLEMS (MEDIUM)
/* A builder is looking to build a row of N houses that can be of K different colors. He has a goal of minimizing cost while ensuring that no two neighboring houses are of the same color.
Given an N by K matrix where the nth row and kth column represents the cost to build the nth house with kth color, return the minimum cost which achieves this goal. */
function minCost(costs) {
    if (!costs || costs.length === 0 || costs[0].length === 0) {
        return 0;
    }

    const n = costs.length;
    const k = costs[0].length;

    if (k === 1) {
        return n === 1 ? costs[0][0] : Infinity; // Impossible if more than one house and only one color
    }

    let prevMin = 0;
    let prevSecondMin = 0;
    let prevColor = -1;

    for (let i = 0; i < n; i++) {
        let currentMin = Infinity;
        let currentSecondMin = Infinity;
        let currentColor = -1;

        for (let j = 0; j < k; j++) {
            // Calculate the cost for current house and color j
            const cost = costs[i][j] + (j === prevColor ? prevSecondMin : prevMin);

            // Update currentMin and currentSecondMin
            if (cost < currentMin) {
                currentSecondMin = currentMin;
                currentMin = cost;
                currentColor = j;
            } else if (cost < currentSecondMin) {
                currentSecondMin = cost;
            }
        }

        prevMin = currentMin;
        prevSecondMin = currentSecondMin;
        prevColor = currentColor;
    }

    return prevMin;
}

// Example usage
const costs = [
    [1, 5, 3],
    [2, 9, 4]
];
console.log(minCost(costs)); // Output: 5 (1 + 4)

//DAILY CODING PROBLEM
/* Given an array of strictly the characters 'R', 'G', and 'B', segregate the values of the array so that all the Rs come first, the Gs come second, and the Bs come last. You can only swap elements of the array.
Do this in linear time and in-place.
For example, given the array ['G', 'B', 'R', 'R', 'B', 'R', 'G'], it should become ['R', 'R', 'R', 'G', 'G', 'B', 'B'] */
const orderRGB = (arr) => {
    let numberGreen = 0;
    let numberRed = 0;
    let numberBlue = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === "R") {
            numberRed++
        } else if (arr[i] === "G") {
            numberGreen++
        } else if (arr[i] === "B") {
            numberBlue++
        }
    }

    let res = []

    for (let i = 0; i < numberRed; i++) {
        res.push("R")
    }
    for (let i = 0; i < numberGreen; i++) {
        res.push("G")
    }
    for (let i = 0; i < numberBlue; i++) {
        res.push("B")
    }

    return res
};

//DAILY CODING PROBLEM (MEDIUM)
/* A builder is looking to build a row of N houses that can be of K different colors. He has a goal of minimizing cost while ensuring that no two neighboring houses are of the same color.
Given an N by K matrix where the nth row and kth column represents the cost to build the nth house with kth color, return the minimum cost which achieves this goal. */
function minCost(costs) {
    if (!costs || costs.length === 0 || costs[0].length === 0) {
        return 0;
    }

    const n = costs.length;    // Number of houses
    const k = costs[0].length; // Number of colors

    if (k === 1) {
        return n === 1 ? costs[0][0] : Infinity; // Only one color, can't paint adjacent houses differently
    }

    // Initialize the DP array with the costs of the first house
    let dp = [...costs[0]];

    for (let i = 1; i < n; i++) {
        // Find the minimum and second minimum costs from the previous house
        let min1 = Infinity, min2 = Infinity;
        for (let cost of dp) {
            if (cost < min1) {
                min2 = min1;
                min1 = cost;
            } else if (cost < min2) {
                min2 = cost;
            }
        }

        // Calculate the new costs for the current house
        let newDp = [];
        for (let j = 0; j < k; j++) {
            // If the previous house was painted with color j, use the second minimum cost
            // Otherwise, use the minimum cost
            newDp[j] = costs[i][j] + (dp[j] === min1 ? min2 : min1);
        }
        dp = newDp;
    }

    // The answer is the minimum cost in the last row
    return Math.min(...dp);
}

// Example usage
const costes = [
    [1, 5, 3],
    [2, 9, 4]
];
console.log(minCost(costes)); // Output: 5 (1 + 4)

//DAILY CODING PROBLEM (EASY)
/* Given an array of time intervals (start, end) for classroom lectures (possibly overlapping), find the minimum number of rooms required.
For example, given [[30, 75], [0, 50], [60, 150]], you should return 2. */
function minClassrooms(intervals) {
    if (intervals.length === 0) return 0;

    // Sort intervals by start time
    intervals.sort((a, b) => a[0] - b[0]);

    // Initialize a list to keep track of end times of classrooms
    let classrooms = [];

    for (let [start, end] of intervals) {
        // Check if any classroom is free (end time <= current start time)
        let found = false;
        for (let i = 0; i < classrooms.length; i++) {
            if (classrooms[i] <= start) {
                // Reuse this classroom
                classrooms[i] = end;
                found = true;
                break;
            }
        }
        if (!found) {
            // Need a new classroom
            classrooms.push(end);
        }
    }

    return classrooms.length;
}

//DAILY CODING PROBLEM (MEDIUM)
/* Given a dictionary of words and a string made up of those words (no spaces), return the original sentence in a list. If there is more than one possible reconstruction, return any of them. If there is no possible reconstruction, then return null.
For example, given the set of words 'quick', 'brown', 'the', 'fox', and the string "thequickbrownfox", you should return ['the', 'quick', 'brown', 'fox'].
Given the set of words 'bed', 'bath', 'bedbath', 'and', 'beyond', and the string "bedbathandbeyond", return either ['bed', 'bath', 'and', 'beyond] or ['bedbath', 'and', 'beyond']. */
function wordBreak(dict, s) {
    const memo = new Map();
    
    // starts from a given index in the string and checks all possible substrings starting at that index. If a substring matches a word in the dictionary, it recursively processes the remaining string.
    function backtrack(start) {
        if (start === s.length) {
            return [];
        }
        if (memo.has(start)) {
            return memo.get(start);
        }
        
        for (let end = start + 1; end <= s.length; end++) {
            const word = s.substring(start, end);
            if (dict.includes(word)) {
                const rest = backtrack(end);
                if (rest !== null) {
                    memo.set(start, [word, ...rest]);
                    return memo.get(start);
                }
            }
        }
        
        memo.set(start, null);
        return null;
    }
    
    return backtrack(0);
}