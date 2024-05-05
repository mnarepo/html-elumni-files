// var age = 10;
// if (age >= 65) {
//     console.log("You get your income fom your pension");
// } else if (age < 65 && age >= 18) {
//     console.log("Each month you got a salary");
// } else if (age < 18) {
//     console.log("You get an allowance");
// } else {
//     console.log("The value of the age variable is not numerical");
// }

// var day = "Sunday";
// switch (day) {
//     case 'Monday':
//         console.log("Today is Monday");
//         break;
//     case 'Tuesday':
//         console.log("Today is Tuesday");
//         break;
//     case 'Wednesday':
//         console.log("Today is Wednesday");
//         break;
//     case 'Thursday':
//         console.log("Today is Thursday");
//         break;
//     case 'Friday':
//         console.log("Today is Friday");
//         break;
//     case 'Saturaday':
//         console.log("Today is Saturaday");
//         break;
//     case 'Sunday':
//         console.log("Today is Sunday");
//         break;
//     default:
//         console.log("Your Input was not correct");
//         break;
// }

// for (i = 1; i <= 2; i++) {
//     for (j = 1; j <= 6; j++) {
//         console.log("Week " + i + " day " + j);
//     }
//     console.log("\n");
// }

// for (var i = 1; i <= 10; i++) {
//     if (i == 1) {
//         console.log("Gold Medal");
//     } else if (i == 2) {
//         console.log("Silver Medal");
//     } else if (i == 3) {
//         console.log("Bronze Medal");
//     } else {
//         console.log(i);
//     }
// }

// function addTwoNum(){
//     var a = 10;
//     var b = 10;
//     var c = a + b;
//     console.log(c);
// }
// for(var i = 1; i<=20; i++){
//     addTwoNum();
// }

// function addTwoNum(a, b){
//     var c = a + b;
//     console.log(c);
// }
// for(var i = 1; i<=20; i++){
//     addTwoNum(10,10);
// }

// var train1 = ["wheat", "barley", "potato", "salt", "rocks"];
// console.log(train1[0]);
// console.log(train1[4]);

var train1 = ["wheat", "barley", "potato", "salt", "rocks"];
function arrayShow() {
    console.log(train1 + "\n");
}
for (var i = 1; i <= 5; i++) {
    arrayShow();
    break;
}