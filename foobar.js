
function foobar(n){
    if(n%5==0 && n%3==0) console.log("Foobar");
    else if(n%5==0) console.log('bar');
    else if(n%3==0) console.log('foo');
    else  console.log(n);
}


let n=50;
for(let i=1;i<=50;i++){
    foobar(i);
}