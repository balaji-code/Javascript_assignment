//1. Write a program to find whether a given year is a leap year or not.


function findLeapYear(inputYear)
{
  // A year is said to be leap year if it is a multiple of 400 or if it is multiple of 4 but not a multiple of 100.
  return (inputYear % 100=== 0) ? (inputYear % 400 === 0): (inputYear % 4 === 0);
}
 let inputYear = 2022;

if(findLeapYear(inputYear) === true)
console.log( `The given year ${inputYear} is a leap year\n`);
else
console.log(`The given year ${inputYear} is not a leap year\n`);

/**********************************************************************************************************************************************/ 

//2. Write a JavaScript program to convert temperatures to and from Celsius,Fahrenheit.

function tempConvr(inCel,inFar)
{
  if(inFar === 0)
  {
    return inCel*1.8 + 32;
  }
  else if (inCel === 0)
  {
    return inFar*0.56 - 17.78;
  }
  
};
// for converting from fahrenheit to celsius
console.log(`${tempConvr(0,45)} degrees celsius`);

// for converting from celsius to fahrenheit 
console.log(`${tempConvr(60,0)} degrees Fahrenheit\n`);


/****************************************************************************************************************/


//3. Write a program to find the factorial of a number.

function getFactorial(inNum)
{
  let fact = 1;
  // loop for calculating the factorial by using decrementing operator
for (let i = inNum ; i>0 ;i--)
{
  fact = fact*i;
  
}
return fact;
}

let fact = getFactorial(7);

console.log(`Factorial for the given number is ${fact}`);
