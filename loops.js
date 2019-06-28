// Write a function called `isVowel` that returns `true` if the input is a
// single character and either an upper or lower-case a, e, i, o, or
// u. It should return false otherwise.
//
//    isVowel("a");
//    //=> true
//
//    isVowel("E");
//    //=> true
//
//    isVowel(1);
//    //=> false
//
//    isVowel("Ea");
//    //=> false
//
//    isVowel("Y");
//    //=> false

var isVowel = function (char) {

  var vowel = "aeiouAEIOU";

  return vowel.includes(char);

};


// Write a function called `isLowerCaseLetter` that returns `true` if
// the input is a single letter and lower-case. It should return false otherwise.
//
//    isLowerCaseLetter("a");
//    //=> true
//
//    isLowerCaseLetter("A");
//    //=> false
//
//    isLowerCaseLetter(1);
//    //=> false
//
//    isLowerCaseLetter("ae");
//    //=> false
//
//    isLowerCaseLetter(true);
//    //=> false

var isLowerCaseLetter = function (char) {
  
  if (char.length == 1)
    
    return (char >= "a")&&(char <= "z");
  
  return false;

};


// Write a function called `sumUpTo` so that it accepts a positive number `n`
// and sums the first `n` positive integers. For example, if you call `sumUpTo(5)`
// it should sum the numbers 1 through 5 inclusive. It should throw an error if the
// input number is negative.
//     sumUpTo(100);
//     //=> 5050
//
//     sumUpTo(10);
//     //=> 55
//
//     sumUpTo(0);
//     //=> 0
//
//     sumUpTo(-10);
//     //=> input must be a zero or a positive number!

var sumUpTo = function (number) {

  if (number>=0){
    
    for(var sum = 0, iter = 1; iter <= number; sum += iter, iter++);
    
    return sum;
 
  }
  
  return "input must be a zero or a positive number!"
      
};


// Write a function called `sumAToB` so that it accepts two parameters
// `a` and `b` and sums the numbers between `a` and `b` inclusive. Note
// that `a` may be larger than `b`, in which case you'll need to work
// backawards.
//
//     sumAToB(10, 20);
//     //=> 165
//
//     sumAToB(0, -15);
//     //=> 120
//
//     sumAToB(-10, 500);
//     //=> 125195
//
//     sumAToB(10, 10);
//     //=> 10
//     sumAToB("hello", "world");
//     //=> inputs should be numbers!

var sumAToB = function (num1, num2) {
  
  if(typeof(num1) === "number" && typeof(num2) === "number"){
    
    var max = 0, min = 0;
    
    (num1 > num2)?(max = num1, min = num2):(max =num2, min = num1);
    
    for(var sum = 0, iter = min; iter <= max; sum += iter, iter++);
    
    return sum;
  
  }
  
  return "inputs should be numbers!";

};


// Write a function called `countVowels` that accepts a string and
// returns the number of vowels contained in that string. You'll want
// to use the `isVowel` helper function from above. It should throw an
// error if the input is not a string
//
//     countVowels("hello world!");
//     //=> 3
//
//     countVowels("omg this is a hilarious tweet about nothing");
//     //=> 16
//
//     countVowels("");
//     //=> 0
//
//     countVowels(true);
//     //=> input to countVowels must be a string!

var countVowels = function (string) {
  if(typeof(string) === "string"){
   
    for(var vowelCount = 0, index = 0; string[index] != null; index++){
      
      if(isVowel(string[index]))
        
        vowelCount++;
    }
    
    return vowelCount;

  }
  
  return "input to countVowels must be a string!";
  
};


// Write a function that accepts a string and returns the same string, only in
// reverse!
//
//     reverse("hello world!");
//     //=> !dlrow olleh
//
//     reverse("omg this is a hilarious tweet about nothing");
//     //=> gnihton tuoba teewt suoiralih a si siht gmo
//
//     reverse("");
//     //=>
//
//     reverse(true);
//     //=> input to reverseString must be an string!

var reverseString = function (string) {
  
  if(typeof(string) == "string"){
   
    var reverse="";
    
    for(var index = string.length-1; index >= 0; index--)
     
      reverse+=string[index];
    
    return reverse;
 
  }
  
  return "input to reverseString must be an string!";

};


// A number is a prime number if it is only evenly divisible by 1 and itself
// (although we don't consider 1 a prime number, so 2 is the first prime
// number). Write a function called `isPrime` that accepts a number `p` as an
// argument and returns `true` if it is prime, `false` otherwise.
//
//     isPrime(101);
//     //=> true
//
//     isPrime(13);
//     //=> true
//
//     isPrime(1);
//     //=> false
//
//     isPrime(2);
//     //=> true
//
//     isPrime("hello");
//     //=> false
//
//     isPrime(-101);
//     //=> false

var isPrime = function (p) {
 
  if(typeof(p) === "number" && p !== 1 ){
   
    var mid = p / 2;
   
    for(var iter = 2; iter <=mid; iter++){
        
        if(p % iter === 0)
          
          return false;
    }
    
    return true;
  }
  
  return false;

};

// Using the `isPrime` function, write a function that accepts a number as
// input sums all the primes smaller than that number.
//
//     sumPrimesUpTo(100);
//     //=> 1060
//
//     sumPrimesUpTo(0);
//     //=> 0
//
//     sumPrimesUpTo(1000);
//     //=> 76127
//
//     sumPrimesUpTo(2);
//     //=> 2
//
//     sumPrimesUpTo("whatever");
//     //=> input should be a number

var sumPrimesUpTo = function (number) {
  if(typeof(number)=="number"){
    var sum = 0;

  for(var iter =2; iter<=number; iter++){
    
    if(isPrime(iter))
      
      sum+=iter;
  }
  
  return sum;
 
 }
 
 return "input should be a number";

};

// Using the `isPrime` function, write a function that takes in a
// positive integer, n, and returns the first n numbers.
//
//     sumOfFirstNPrimes(10);
//     //=> 129
//
//     sumOfFirstNPrimes(100);
//     //=> 24133
//
//     sumOfFirstNPrimes(1000);
//     //=> 3672913
//
//     sumOfFirstNPrimes(0);
//     //=> 0
//
//     sumOfFirstNPrimes(1);
//     //=> 2
//
//     sumOfFirstNPrimes(-10);
//     //=> input number should be zero or a positive number!

var sumOfFirstNPrimes = function (p) {

  if(p>=0){
  
  var sum = 0;
   
    for(var count =1, num = 2; count<=p; num++){
      
      if(isPrime(num)){
        
        sum+=num;
        
        count++;
      
      }
  }
  
  return sum;
 
 }
 
 return "input number should be zero or a positive number!";

};


// A _palindrome_ is a string that reads the same forwards and backwards. Write
// a function that accepts a string of arbitrary letters, numbers, and symbols, and
// returns true if it's a palindrome. For example:
//
//      isPalindrome("kayak");
//      //=> true
//
//      isPalindrome("A man, a plan, a canal, Panama");
//      //=> true
//
//      isPalindrome("hello world");
//      //=> false
//
// Let's start by writing a function to remove all non-letter characters
// from the input.
//
//     removeNonLetters("A man, a plan, a canal, Panama");
//     //=> AmanaplanacanalPanama
//
//     removeNonLetters("this is a string; it has some punctuation!");
//     //=> thisisastringithassomepunctuation

var removeNonLetters = function (str) {
 
  var newString= String(str).split("").filter(function(char){ 
    
    return (char >= "a" && char <= 'z')||(char >= "A" && char <= 'Z')}).join("");
 
  return newString;

};


// Now use `removeNonLetters`, along with the `reverse` function from above to
// determine if the string is a palindrome.

var isPalindrome = function (s) {
  
  var newStr = removeNonLetters(s).toLowerCase();
  
  if(newStr=='') return false;
  
  var reverseStr = reverseString(newStr).toLowerCase();
  
  return newStr === reverseStr;

};
