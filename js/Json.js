// const jsonString = '{"name":"Alice","age":25,"Salary":"25000"}';
// const { name, age,Salary } = JSON.parse(jsonString);

// console.log(name); // Output: Alice
// console.log(Salary);  // Output: 25

// let jsonString = '{"name":"Alice","age":25,"address":{"city":"NY","zip":"10001"}}';
// let obj = JSON.parse(jsonString);

// // Update city
// obj.address.city = "Los Angeles";

// // Convert back to JSON
// jsonString = JSON.stringify(obj);
// console.log(jsonString);
// // Output: {"name":"Alice","age":25,"address":{"city":"Los Angeles","zip":"10001"}}
// import data from './data.json'
// // const data = require("./data.json");

// console.log(data); // Output: John

// Import JSON data (if it's in a separate file like data.json)
// const data = require('./data.json'); 

// JSON example as a string
// c



const jsonForm = {
    "id": "101",
    "name": "Alice",
    "scores": [80, 90, 85],
    "isGraduated": false
};

console.log(jsonForm);

// Destructure the 'id' directly
const { id } = jsonForm;
console.log(`id = ${id}`);

jsonForm.name="SIVA"

let jsonForm1=JSON.stringify(jsonForm);
console.log(jsonForm1);

