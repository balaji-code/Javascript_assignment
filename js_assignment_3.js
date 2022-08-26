//1.Javascript program to output the given pattern

//initialising a varaible for printing the numbers
let k = 1;
//loop for the row 
for(i= 0; i<4 ;i++)
{
// loop for logging the numbers in a single row appending the space in between
  for( j=1,s = ' '; j<=i+1 ; j++)
  {   
  s += k + ' ' ;  
  k++; 
  }
  console.log(`${s}\n`); 
};

//----------------------------------------------------------------------------------------------------------------------------------------//

//2. Write a program to find whether a given number is armstrong number or not-

let num = 153, sum = 0;
// converting the given number in to a string
let str = num.toString();
// separating the characters in the string and calculating the power of the numbers
for(i=0;i<str.length;i++)
{
  sum += Math.pow(parseInt(str.charAt(i)),3);
};

// checking the condition for the amstrong number
if (num === sum)
{
  console.log(`The given number ${num} is an Amstrong number`);
}else{
  console.log(`The given number ${num} is not an Amstrong number`);
};

//----------------------------------------------------------------------------------------------------------------------------------------//

//3. Write a program to find whether a given number is special number or not-

let inNum = 145; total = 0;
// converting the number into string 
let inStr = inNum.toString();
// separating the characters and calculating the factorial by calling a function
for(i=0;i<inStr.length;i++)
{

  total += findFac(parseInt(inStr.charAt(i)));

};

// checking the condition for the special number
if (inNum=== total)
{
console.log(`The given number ${inNum} is a special number`);
}else {
console.log(`The given number ${inNum} is not a special number`);
};

// function for calculating the factorial for a given number
function findFac(num)
{
  let fac=1;
  for (j = num; j>=1; j--)
  fac =  fac*j;

  return fac;

}


 