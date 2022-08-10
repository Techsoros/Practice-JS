/**
 * 
 * chair = 3CFT
 * Table = 10CFT
 * bed = 50 CFT
 * 
 * 
 * 
 */

function woodCal(c,t,b)
{
    return c*3+t*10+b*50;
}
function woodCost(w)
{
    console.log("Wood Price = 200taka/CFT");
    workingFee=w*50;
    console.log("Making Fee :  "+workingFee);
    return workingFee+w*200;
}
let chair=80 ,table=20 ,bed=2;
let totalWood=woodCal(chair,table,bed);
console.log("Total Wood Need : "+totalWood+' CFT');
let totalCost=woodCost(totalWood);
console.log("total Cost: "+totalCost);