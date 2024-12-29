// const  fruits = ()=> {
//     console.log("Hii this is friuts");  
    const orange = () => {
        console.log("This is Orange");
        
    }
// }

orange();

function greet(name = "Guest") {
    console.log(`Hello, ${name}!`);
}

greet();         // Output: Hello, Guest!
greet("Yugesh");