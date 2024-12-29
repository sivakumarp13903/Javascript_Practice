// const myPromise = new Promise((resolve,reject) => {

// })


// Used to specify what should be done when the promise is fulfilled (resolved).
// Returns a new promise, allowing for chaining.

// myPromise.then((result) => {

// })

// Used to handle the rejection of the promise (when it fails).
// Used to handle errors.

// myPromise.catch((error) => {

// })

// myPromise.finally(() => {

// })


// function walkDog(callback){
//     setTimeout(() => {
//         console.log("You walk the dog");
//         callback();
//     },1500);
// }

// function cleanKichen(callback){
//     setTimeout(() => {
//         console.log("You clean the kichen");
//         callback();
//     },2500)
// }

// function takeOutTrash(callback){
//     setTimeout(() => {
//         console.log("You take out the trash");
//         callback();
//     },500)
// }


// walkDog(()=>{
//     cleanKichen(() => {
//         takeOutTrash(() => console.log("You completed work"));
//     })
// })


per();
var per = function(){
    console.log("hi");
};

// per();