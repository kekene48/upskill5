//1. Create a function that will be able to convert figures from Fahrenheit to Celcius.
function farToCel(num) {
  return ((5 / 9) * (num - 32) + ' °C')
}

farToCel(20) //93.8888888 °C

//2. Create a function that will calculate the average of numbers in an array
function avg(...nums) {
  var total = 0;
  newArr = nums.reduce((acc, curr) => {
 		total+=curr
  	acc++
  	return acc
		}, 0)
	console.log(total / newArr)
}

avg(1,2,3,4,5,6,7,8,9,10) // 5.5
avg(2,4,6,8,10,12,14,16,18,20) //11

//3. Create a function that checks if a number, n is divisible by two numbers, x and y
//. All inputs are positiive, non-zero digits

function isDivisible(a,b,n) {
   if(n % b === 0 && n % a === 0) {
     return true
   } else {
     return false
   }
 }

isDivisible(2,3,6) //true
isDivisible(2,3,7) //false

//4. Create a function that will output the first 100 prime numbers

function listFirst100Primes() {
  var primes = [];
  var num = 2;

  while (primes.length < 100) {
    if (isPrime(num)) {
      primes.push(num);
    }
    num++;
  }

  return primes;
}

function isPrime(number) {
  for (var i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) {
      return false;
    }
  }
  return number > 1;
}

var primeNumbers = listFirst100Primes();
console.log(primeNumbers);


//5. Create a function that will return a boolean sepcifying if a number is a prime number
function isPrimeNum(num) {
  let isPrime = true;
  
  if(num === 1) {
    return false
  } else if(num > 1) {
    for(i=2;i<num;i++) {
      if(num % i === 0) {
        isPrime = false;
        break;
      }
    }
    if(isPrime) {
      return true
    } else {
      return false
    }
  }
  else {
    return false
  }
}

isPrimeNum(4)  //false 
isPrimeNum(17)  //true

//6. Create a function that receives an array of numbers of diverse numbers and retuens an 
//array containing only positive numbers

function posNums(...nums) {
  var newNums = nums.filter(num => {
    return num > 0
  })
  return newNums
}

posNums(-3,-10,-7,-8,-2,-11,1,2,3,4,5,6,7,8,9,10) //[1,2,3,4,5,6,7,8,9,10]

//7. Write a program that prints the numbers from 1 to 100. But for multiples of 3 prints
// 'Fizz' instead of the number and for multiples of 5 prints ' Buzz'. For numbers which
//are multiples of both 3 and 5 prints 'FizzBuzz

function fizzbuzz() {
  for(i=1;i<101;i++) {
    if(i % 5 === 0 && i % 3 === 0) {
      console.log('FizzBuzz')
    } else if(i % 5 === 0) {
      console.log('Buzz')
    } else if(i % 3 === 0) {
      console.log('Fizz')
    } else {
      console.log(i)
    }
  }
}

fizzbuzz() //1 2 Fizz 4 Buzz Fizz 7 8 Fizz Buzz 11 Fizz 13 14 FizzBuzz ...


//8. The Marketing team is spending way too much time typing  in hashtags. Let's create a hashtag generator
//for them, our hashtag generator will meet the following criteria:
//  - It must start with a hash(#) symbol
//  - Ignore all spaces in the input
//  - All words must have their first letter capitalized
//  - If the fianl result is going to be longer than 140 characters, it should return false.
//  - if the input or result is an empty string, it should return false
function hashGen(val) {
  if(val.length = 0) {
    return false
  } else if(val.length > 140) {
    return false
  }
  val = val.trim().replace(/ +/g, '');
  return (
  	'#' + val.slice(0,1).toUpperCase() + val.slice(1,140).replace(' ', '')
  )
}

hashGen('my      name     is     ke   lvi   n      ')  //#MynameisKelvin





