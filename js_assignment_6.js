// performing some operations to provide the implementation for a rectangle class

//creating a rectangle class

class rectangleCl{
  constructor (objName,length,breadth){
    this.objName = objName;
    this.length = length;
    this.breadth = breadth;
  };
// method to calculate the area
  area(){
    let area = this.length*this.breadth;
    console.log(`The area of the given ${this.objName} is ${area}`);
  };
};

// creating a square class which inherits the rectangle class
class squareCl extends rectangleCl{
  constructor(objName,length,breadth)
  {
    super(objName,length,breadth); 
  }
}

 const objSq = new squareCl('sqaure',25,25);
 objSq.area();

 //*---------------------------------------------------------------------------------------------*//

//2) Write a javascript function find_largest to return the nth largest number
//in an array- 

function find_largest(num){

  let arr = [3,45,6,7,23,5,7,8], arrFinal =[],count;


  for(let i =0; i<arr.length; i++)
  {
    count = 0;
    for(let j = 0 ; j<arr.length; j++)
    {
      if(arr[i]<arr[j])
      count++;
      
    }
    arrFinal[count] = arr[i];
  }
  // filtering the empty items due to repeated numbers
arrFinal = arrFinal.filter(function(){return true});

return arrFinal[num-1];
};

console.log(find_largest(3));

//*--------------------------------------------------------------------------------------------*//

//Write a JavaScript program which accept a number as input in the
//function parameter and insert dashes (-) between each two even numbers.

function insertDashNum(num1)
{
let str = num1.toString(), strFinal = str.charAt(0);
for(let i= 0;i<str.length;i++)
{
  // placing the dash when the consecutive numbers are even
  if (str.charAt(i)%2 === 0 && str.charAt(i+1)%2 === 0 && (i+1)<str.length)
  {
    strFinal = strFinal+ '-'+ str.charAt(i+1);
  }
  else 
  strFinal = strFinal + str.charAt(i+1);
}

return strFinal;

};

console.log(insertDashNum(28468967));
//*-----------------------------------------------------------------------------------------------------------------------*//

