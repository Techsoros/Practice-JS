// Remove Duplicate element from an Array

function removeDuplicate(a){
    for(let i=0;i<a.length;i++)
    {
        let number=a[i];
        let count=1;

        for(let j=i+1;j<a.length;j++)
        {
            
            if(a[j]==number){
                count++;
                a.splice(j,1);
                
            }
           
        }
        if(count>1) console.log(number +'Found :: '+count+' times');
    }


}

let arra=[9,1,3,1,5,7,67,5,45,3,12,78,34,12,67,88,12,32];
console.log( 'Total Array Elements '+arra.length );
for(number in arra) console.log(arra[number]);

removeDuplicate(arra);
console.log( 'After Removing \nTotal Array Elements '+arra.length );
for(number in arra) console.log(arra[number]);