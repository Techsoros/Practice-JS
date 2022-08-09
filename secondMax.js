

let a=[15,13,11,12,13,15];
let max=a[0] , maxLocation=0;
for(var i=1;i<a.length;i++){ 
    if(a[i]>max){
        max=a[i];
        maxLocation=i;
    }
}
let max2=max*-1; // 

for(i=1;i<a.length;i++){
    
        if(a[i]>max2 && a[i]!=max){
            max2=a[i];
        }
    
}

console.log("1st Maximum Value : "+max);
console.log("2nd maximum Value : "+max2);




