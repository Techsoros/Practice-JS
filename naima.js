
//এই ফাংশন টা রিটার্ন করবে এভারেজ মার্ক । এখানে আমরা রেজাল্ট গুলো কে এরে তে করে পাঠিয়েছি। এবং এটা সেগুলো কে কাউন্ট করে এভারেজ করে রিটার্ন করেছে। 
function avgMark(mark){
    let sum=0;
    for(var i=0;i<mark.length;i++)
    { 
        sum=sum+mark[i];

    }

    let avg=sum/mark.length;
    return avg;

}    

// এখানে আমরা নেক্সট এসাইনমেন্ট গুলোতে কত করে পেতে হবে তা রিটার্ন করেছি।

function marksNeeded(mark ,assignmentCount){

    let sum=0;

    for(var i=0;i<mark.length;i++)
    {
        sum=sum+mark[i];

    }

    let marksNeed=(500-sum)/(10-assignmentCount);

    return marksNeed;
    
}

function checkSCIC(mark ,assignmentCount)
{
    for(var i=0;i<mark.length;i++)
    {
        if(mark[i]<30){
            return false;
        }

    }
    const futureScore=marksNeeded(mark ,assignmentCount);
    if(futureScore>60){
        return false;
    }

    return true;

    
}

let marks=[31 , 31 ,33,42,45,60];

let assignmentCount=marks.length;

let avarage= avgMark(marks);

console.log("Your Avarage mark = "+avarage);
let marksneed=marksNeeded(marks ,assignmentCount);
console.log("You Need to score "+marksneed+" in next "+assignmentCount+" assignments");

let check=checkSCIC(marks,assignmentCount);
if(check==true){
    console.log("Work Hard.  You can crack SCIC");
}else{
    console.log("Sorry. You cant pass SCIC");
}




