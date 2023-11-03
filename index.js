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
        birthdate: "Jan 5, 2019",
        gender: "female"
    },
    {
        firstName: "John",
        lastName: "Doe",
        birthdate: "Dec 5, 1996",
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
        birthdate: "Nov 9, 2001",
        gender: "male"
    }
]

// Use for...of loop to print birthdate if year is odd.
function birthInfo(arrayOfPersons) {
    let text = ''
    for (let x of arrayOfPersons) {
        let bDay = x.birthdate
        text += x
        if (bDay.charAt(bDay.length-1) % 2 !== 0){
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
function olderThanGenZ(arr) {
    for (let i = 0; i < arr.length; i++) {
        let birthYear = arr[i].birthdate.slice(-4)
        if (Number(birthYear) < 1990) {
            console.log (arr[i].firstName + ' was born before 1990')
        }
    }
}
olderThanGenZ(arrayOfPersons)

// Use .filter() to filter the persons array and console.log only people that were born before Jan 1, 1990
const Older = arrayOfPersons.filter(person => (Number(person.birthdate.slice(-4)) < 1990 ))
console.log(Older)


// BONUS - Create a function that returns true if the date passed to it is >= 21 years in the past.
function old(data) {
    let currentTime = new Date()
    let thisYear = currentTime.getFullYear()   
    if (Number(data) <= thisYear - 21) {
        return true
    } else {return false}
}
console.log(old(1900))
console.log(old(2019))

// BONUS - .filter() out the people in the array who are younger than 21.
// let yearOfBirth  = Number(person.birthdate.slice(-4))
let currentTime = new Date()
let thisYear = currentTime.getFullYear()  
const youngerThan21 = arrayOfPersons.filter(person => (Number(person.birthdate.slice(-4)) >= thisYear -21))
console.log(youngerThan21)
// const maleOnly = arrayOfPersons.filter(person => (person.gender == 'male'))
// console.log(maleOnly)