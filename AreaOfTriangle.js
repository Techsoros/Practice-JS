function findArea(a,b,c){
    const s=(a+b+c)/2;

    return Math.sqrt((s-a)*(s-b)*(s-c)).toFixed(2);
}

let s1= 10;
let s2= 22;
let s3 = 18;

const area=findArea(s1,s2,s3);
console.log("Area is : "+area);