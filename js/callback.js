function bankPayment(amt,pts){
    if(amt%2==0){
        pts("Succes",amt);
    }

    else{
        pts("failed",amt);
    }
}

//-------------
const paymentStatus = (a,amt) => {
    // console.log(a+" : "+amt)
    return a;
}



const t=bankPayment(10,paymentStatus);
console.log(t);



// A fuction that pass by the parameter is called call back function

