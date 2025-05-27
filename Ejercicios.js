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