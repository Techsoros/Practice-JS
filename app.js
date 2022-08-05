
function avarageMarks(first, second, third){
    // Problem-1
    const avarage = (first + second + third) /3;
    console.log(avarage)
    // problem-2
    const sumOfMarks = first + second + third;
    const totalAssignment = 10;
    const eachAssignmentMarks = 60;
    const minimumMarksEach = 30;
    const totalMarks = totalAssignment * eachAssignmentMarks;
    const getMarks = (totalMarks / 100) * 83.4;
    const totalAvarage = parseInt(getMarks);
    const getTotalAvarage = totalAvarage / 10;
    const neededTotalMarks = getTotalAvarage - avarage ;
    console.log(neededTotalMarks)
    // Problem-3
    if(first > minimumMarksEach && second > minimumMarksEach && third > minimumMarksEach ){
        console.log("You are eligible for SCIC")
    }
    else{
        console.log("Opps..Sorry..!! Try to best. Good Luck")
    }
    return avarage, neededTotalMarks;
 }

 console.log(avarageMarks(51, 31, 33));