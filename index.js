// function saturdayFun(activity) {
//     if(activity == undefined) {
//         return "This Saturday, I want to roller-skate!";
//     } else {
//         return `This Saturday, I want to ${activity}!`;
//     }
// };


//more concise:
function saturdayFun(activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`;
}


// function mondayWork(activity) {
//     if(activity == undefined) {
//         return "This Monday, I will go to the office.";
//     } else {
//         return `This Monday, I will ${activity}.`;
//     }
// };


//more concise:
function mondayWork(activity = "go to the office") {
    return `This Monday, I will ${activity}.`;
}



function wrapAdjective(adj = "*") {
    return function(variable = "special") {
        return `You are ${adj}${variable}${adj}!`
    }
}


// let result = wrapAdjective("||");
// let emphatic = result("a dedicated programmer");

// console.log(emphatic);



//you can have annonymous function inside another function
//you don't need to have more than one parameter for each function, so you can have more than one.
//lastly, the final return value inside the inner function is usually a string that has all the interpolations.
//where the vairable = "special" ==> this is just defaulting that value to "special" but can be overidden when an argument is passed in.
//






