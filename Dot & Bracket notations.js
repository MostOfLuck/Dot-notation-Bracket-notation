//An object
const Sam = {
    firstName: 'Sam',
    lastName: 'Burtman',
    age: 2022 - 2006,
    job: 'None',
    status1: 'student',
}
//Dot notation
console.log(Sam.firstName)

//Bracket notation
const namekey = 'Name'
console.log(['Last' + namekey])


const information = prompt('Choose information that you want to know about Sam. Options : job, lastname, age, friends')

console.log(Sam[information]);
if (Sam[information]) {
    console.log(Sam[information])
} else {
    console.log('Seems, this option does not exsist. try options : job, lastname, age, friends')
}
//Adds a new propertie to the object named 'Sam'
Sam.location = 'Israel'
console.log(Sam);


