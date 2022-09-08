//JavaScript program to get the volume of a Cylinder, Sphere and
//Cone with four decimal places using objects and classes.

//class for the volume of the cylinder

class cylinderCl{
constructor(radius,height)
{
this.radius = radius;
this.height = height;
};
getVolume()
{
let volCyl = (Math.PI*this.radius*this.radius*this.height).toFixed(4);
console.log(`volume of the cylinder is ${volCyl} cm3`);
};
};

//class for the volume of the sphere
class sphereCl{
  constructor(radius,height)
  {
  this.radius = radius;
  this.height = height;
  };
  getVolume()
  {
  let volSph = (4/3*Math.PI*this.radius*this.radius*this.radius).toFixed(4);
  console.log(`volume of the sphere is ${volSph} cm3 `);
  };
  };

  //class for the volume of the cone
  class coneCl{
    constructor(radius,height)
    {
    this.radius = radius;
    this.height = height;
    };
    getVolume()
    {
    let volCone = (Math.PI*this.radius*this.radius*this.height/3).toFixed(4);
    console.log(`volume of the cone is ${volCone} cm3`);
    };
    };

    let objcyl =  new cylinderCl(5,15);
    objcyl.getVolume();

    let objSphere =  new sphereCl(10,5);
    objSphere.getVolume();

    let objcone =  new coneCl(7,12);
    objcone.getVolume();
