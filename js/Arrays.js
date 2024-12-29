// let arr = [1,2,3,5];
// console.log(arr[3]);
// det(arr[4])

// const det = (num) => {
//     const name="Siva";
//     console.log(num+" "+name);
    
// }

// function greet(name="Siva") {
//     console.log(`Hello, ${name}!`);
// }

// greet();
// greet("Yugesh"); 

// // Create an Object
// const person = {
//     firstName: "John",
//     lastName: "Doe",
//     age: 50
//   };
  
//   // Destructuring
//   let {lastName, firstName} = person;
//   console.log(lastName);
  



  let a=[1,2,3,4,5,6];

  function spreadExample(x,y,z,...v){
    console.log(y);
    
  }
  spreadExample(...a);

const per={
  name1:"Siva",
  age:12
}

const {name1,age} = per

console.log(name1);


