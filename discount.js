/**
 * 1st 100 -100taka
 * 2nd 100 - 80taka
 * rest all- 70taka
 * 
 * 
 */
function checkPrice(ticket){
    let total=0;
    if(ticket<=100){
        return 100*ticket;

    }else if(ticket<=200){
        return ((100*100)+((ticket-100) * 80));

    }else{
        return(100*100)+(100*80)+((ticket-200)*70 );

    }
}

function calculateProfit(buyingPrice , ticketCount){
    let sellingTotal=ticketCount*100;

    let profit=sellingTotal-buyingPrice;

    console.log('if you can sell All your Ticket then');
    console.log('Total Profit  : '+profit);

    let profitPercentage= (profit/buyingPrice *100).toFixed(2);
    console.log('Profit-percent: '+profitPercentage+"%");

    console.log('To Peevent Loss  ');

    console.log('You have to sell minimum : '+Math.ceil((buyingPrice/100))+' Ticket');
}
let ticket=21000;
let price=checkPrice(ticket);
console.log('Ticket buying :'+ticket);
console.log('Total Price   :'+price);
calculateProfit(price,ticket);
