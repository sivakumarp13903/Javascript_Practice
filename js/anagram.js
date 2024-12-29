let a="below"
let b="wbelo"
let s=0;
let s1=0;
if(a.length===b.length)
{
    for(let i=0;i<a.length;i++){
        s=s+a.charCodeAt(i);
        s1=s1+b.charCodeAt(i);
    }
    if(s==s1){
        console.log("Anagram");
    }
    else{
        console.log("Not Anagram");
    }
}
else{
    console.log("Not Anagram");
}
