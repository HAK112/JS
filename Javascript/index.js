//comment
console.log('Hello World');

//var declarations are globally scoped or function scoped while let and const are block scoped
const salary = 21000;
let name = 'Haider';
let age = 21;
let isApproved = false;
let firstName = undefined;
let selectedColor = 'red';

let person = {
    name: 'Haider',
    age:30
}

person.name='john';
person['name']='Mary';

let selection = 'name';
person[selection]='Mary1';

let selectedColors = ['red','blue','green',21];
console.log(name);
console.log(age);
console.log(person);
console.log(person.name);
console.log(selectedColors);
console.log(selectedColors[0]);
selectedColors[4]=45;
console.log(selectedColors);

hello = () => {
    return "Hello World!";
  }

function greet(name){
    console.log('Hello '+name);
}
var x,s=1;
for(x =10;x<0;x++){
    console.log(s);
}
greet("Haider");
greet("Ali");


class Car {
    constructor(name, year) {
      this.name = name;
      this.year = year;
    }
    age(x) {
      return x - this.year;
    }
  }
    
  let myCar = new Car("Ford", 2014);


 