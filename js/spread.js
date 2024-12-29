let a=[1,2,3,4,5,6];
let b= [2,6,4];
function spreadExample(x,...v){
    x[2]=44;
    // console.log(x);
    v[0]=5555
  console.log(arguments);
  
}


spreadExample(a,b);
console.log(a);


// let v= [2,4,5,6,7,3];

// let [b,c,x,...y] = v;


// console.log(y);
