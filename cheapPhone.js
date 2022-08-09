
function findCheap(arr){
    let min=arr[0].price ,obj=arr[0];
    for(let i=1;i<arr.length;i++){
        if(arr[i].price<min){
            min=arr[i].price;
            obj=arr[i];
        }

    }
    return obj;

}

const phones=[
    {name: 'Samsung i 10', price: 19568},
    {name: 'Samsung M 10', price: 32568},
    {name: 'Samsung J 8', price: 19990},
    {name: 'Realme 10 Pro', price: 2499},
    {name: 'Realme note 7 Pro', price: 17999},
    {name: 'Realme X', price: 17900}
   
]

let cheapPhone=findCheap(phones);
console.log("The Cheapest PHone is ::  "+cheapPhone.name);
console.log("Price :: "+cheapPhone.price)
