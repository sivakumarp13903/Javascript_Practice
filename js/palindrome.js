
let a=122322;
a=a.toString()
let b="";
for(let i=0;i<a.length;i++){
    b=a.charAt(i)+b;
}
if(a===b){
    console.log("Palindrome");
}
else{
    console.log("Not Palindrome");
}
