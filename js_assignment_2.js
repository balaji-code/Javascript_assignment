//1. Write a Javascript function to check whether a triangle is equilateral,isosceles or scalene.

function findTriangleType( angle1, angle2,angle3)
{
  // condition to check whether it is a triangle or not 
  if((angle1+angle2+angle3)===180)
  {
    // condition to check whether for a equilateral triangle 
    if (angle1 === angle2 && angle2 ===angle3 && angle1 === angle3)
    {
      console.log(`The given triangle with angles ${angle1} ,${angle2}, ${angle3} is an equilateral triangle`);
    // condition to check for  a isosceles triangle 
    }else if (angle1 === angle2 || angle2 ===angle3 || angle1 === angle3)
    {
      console.log(`The given triangle with angles ${angle1} , ${angle2}, ${angle3} is an isosceles triangle`);
      // condition to check for a scalene  triangle 
    }else if  (angle1 !== angle2 && angle2 !==angle3 && angle1 !== angle3)
    {
      console.log(`The given triangle with angles ${angle1} , ${angle2}, ${angle3} is an scalene triangle`);
    }

  } else 

  console.log(`The given triangle with angles ${angle1}, ${angle2}, ${angle3} is not a triangle`);
}
// checking for triangle
findTriangleType(75,60,50);
// checking for equilateral triangle 
findTriangleType(60,60,60);
// checking for Isosceles triangle 
findTriangleType(45,45,90);
// checking for scalene triangle 
findTriangleType(60,45,75);

//----------------------------------------------------------------------------------------------------------------------------------------------//

//2. Write a function using switch case to find the grade of a student based on marks obtained

function getGrade(Inmarks)
{
// Switch statement to assign grades according to the marks  

  switch (true) {
    case Inmarks>90 && Inmarks<=100:
      console.log("S grade");
      break;
    case Inmarks>80 && Inmarks<=90:
      console.log("A grade");
      break;
    case Inmarks>70 && Inmarks<=80:
      console.log("B grade");
      break;
    case Inmarks>60 && Inmarks<=70:
      console.log("C grade");
      break;
    case Inmarks>50 && Inmarks<=60:
      console.log("D grade");
      break;
    case Inmarks>40 && Inmarks<=50:
      console.log("E grade");
      break;
    case Inmarks>=0 && Inmarks<=40:
      console.log("Student has failed");
      break;
 
    default:
      console.log("Invalid Marks");
      break;
  }
}

// calling the function to get the grade according to the marks entered
getGrade(85);


//----------------------------------------------------------------------------------------------------------------------------------------------//

//3. Write a JavaScript program to find the sum of the multiples of 3 and 5 under 1000

let sum = 0;
//  writing two loops to bring down the number of iterations 
// checking for multiples of 3 below 1000 and adding the multiples
for(i=3;i<1000;i+= 3)
{
  if (i%3 === 0 )
  {
    sum = sum +i;
  
  }
  
}
// checking for multiples of 5 below 1000 and adding the multiples
for(i=5;i<1000; i+=5)
{
  // additonal condition to avoid the duplicates
  if (i%5 === 0 && i%3 != 0)
  {
    sum = sum +i;
 
  }
  
}

console.log(`sum of the multiples of 3 and 5 under 1000 : ${sum}`);

//----------------------------------------------------------------------------------------------------------------------------------------------//

//4. Write a program to find the factorial of all prime numbers between a given range .

//function to get prime numbers from a given range
function prime(min,max)
{
  let isPrime = true, k = 0, primeArray =[];
  
for( i = min; i<= max; i++)
{
//condition for checking for composite number
 if (i>1)
 {
// logic for getting the prime numbers
  for(j=i-1; j<i && j>1;j--)
  {
    isPrime = true;
    if(i%j ==0)
    {
     isPrime = false;
     break;
    }
    
  }
// storing the prime numbers in an array
  if(isPrime)
  {
 primeArray[k] = i;
 k++;
  }

}
}
  return primeArray;
}

let primeArray = [];

primeArray = prime(1,100);

//logging the factorial for each prime number
for(n=0;n<primeArray.length;n++)
{
  
  console.log(`factorial of the prime number ${primeArray[n]} is ${findFac(primeArray[n])}`);
}

// function for calculating the factorial
function findFac(num)
{
  let fac=1;
  for (l = num; l>=1; l--)
  fac =  fac*l;

  return fac;

}
