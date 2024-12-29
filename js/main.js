const Obj={
    name:"siva",
    age:21,
    gender:"Male",
    ph:8072363074
}

const res=Object.entries(Obj).map(([key,value])=>`${key}:${value}`)

console.log(res);