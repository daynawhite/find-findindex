// Use a do...while loop to console.log the numbers from 1 to 1000
let i = 0

// do {i++; console.log(i)}
// while (i < 1000)

// Create an object...
const person = {
    firstName: "Jane",
    lastName: "Doe",
    birthdate: "Jan 5, 1925",
    gender: "female"
}
// Create a function that logs the keys of the object 
function logKeys (person) {
    console.log(Object.keys(person))
}
logKeys(person)

// Create a function that logs the keys and the values of the object 
function logKnV (person) {
    console.log(Object.entries(person))
}
logKnV(person)

const arrayOfPersons = [
    {
        firstName: "Jane",
        lastName: "Doe",
        birthdate: "Jan 5, 1925",
        gender: "female"
    },
    {
        firstName: "John",
        lastName: "Doe",
        birthdate: "Dec 5, 1926",
        gender: "male"
    },
    {
        firstName: "Suzie",
        lastName: "Smith",
        birthdate: "Aug 5, 1943",
        gender: "female"
    },
    {
        firstName: "George",
        lastName: "Wilson",
        birthdate: "Nov 9, 1948",
        gender: "male"
    }
]

// Use for...of loop to print birthdate if year is odd.
function birthInfo(arrayOfPersons) {
    let text = ''
    for (let x of arrayOfPersons) {
        let bDay = x.birthdate
        text += x
        if (bDay.charAt(bDay.length-1) % 2 ==1){
        console.log(bDay)
        }
    }
}
birthInfo(arrayOfPersons)

// Use .map() to print the info of all object in arrayOfPersons:
function getInfo(person) {
    console.log(Object.entries(person))
}
arrayOfPersons.map(getInfo)

// Use .filter() to print only males in the array.
const maleOnly = arrayOfPersons.filter(person => (person.gender == 'male'))
console.log(maleOnly)

// Create a function that returns true if the value of birthDate is before Jan 1, 1990.
function millenials(person) {
    if person.birthDate.

}