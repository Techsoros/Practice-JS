
function calculateCart(cart)
{
    let total=0 ,pPrice=0;
    for(let i=0;i<cart.length;i++){

        pPrice=cart[i].price*cart[i].quantity;

        total+=pPrice;
        
        
        


        
    }
    return total;

}

let Mycart= [
    {name : 'Pen' , price:5, quantity:10 , mes:'piece'},
    {name : 'Sugar' , price:90,  quantity:1 , mes:'KG' },
    {name : 'Coffee' , price:3000,  quantity:.150 , mes:'KG'},
    {name : 'Washing Powder' , price:100,  quantity:.500 , mes:'KG'},
    {name : 'condom' , price:40,  quantity:4 , mes:'packet'},
]

let cartTotal=calculateCart(Mycart);
console.log("Total Price : "+cartTotal);

