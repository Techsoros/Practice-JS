function isPrime(n){

    if(n<=2) return false;
    else if(n%2==0) return false;

    for(i=3;i<Math.sqrt(n);i++){
        if(n%i==0) return false;
    }
    return true;

}
let n=2147483647;
console.log(isPrime(n));