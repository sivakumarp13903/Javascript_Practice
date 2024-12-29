// function dog(cat){
//     console.log("This is Rosey");
//     setTimeout(()=>{
//         cat();
//     },2000);
// }

// function cat(){
//     console.log("This is Jimmy");
    
// }
// dog(cat);


// function payment(bool){
//     console.log("processing");
//     setTimeout(()=>{
//         paymentStatus(bool);
//     },2000);
// }

// const paymentStatus = (bool)=>{
//     if(bool){
//         console.log("Payment Success"); 
//     }
//     else{
//         console.log("Payment Failed"); 
//     }
// }

// payment(false,paymentStatus);



function download(name = "defaultFile.txt",getFile){
    console.log(`Your file is Processing ${name}`);
    setTimeout( () => {
        console.log(`Your file ${name} downloading`);
        getFile(name);
    },2000);
    
}

function getFile(name = "defaultFile.txt"){
    setTimeout( () => {
        console.log(`Your file is ${name} Downloaded Successfully`);
    },2000);
    
    
}

download(undefined,getFile);





