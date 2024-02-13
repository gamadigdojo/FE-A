// tipe data

// integer
let number = 10;

console.log(number)

// String
let String = "JavaScript";
console.log(String)

// Boolean
let boolean = false;
console.log(boolean)


// Date
let date = new Date();
console.log(date)


// Array
let array = [1,2,3,4,5];
console.log(array)


// Object
let object = {
    name: "john",
    age: 30,
    city: "new york"
}
console.log(object)

// Array of Object
let people = [
 {name:"john", age: 30},
 {name:"jane", age: 20}
]

console.log(people)

// tipe variable
// var , let , const

// var

// reassign
var banyakOrang = "20 orang";
console.log(banyakOrang)

banyakOrang = "100 orang";
console.log(banyakOrang)

// redeclare
var banyakOrang = "20 orang";
console.log(banyakOrang)

var banyakOrang = "100 orang";
console.log(banyakOrang)

// let

// reassign
let mobil = "Toyota"
console.log(mobil)

mobil = "Honda"
console.log(mobil)

// redeclare
// let motor = "ninja"
// console.log(motor)

// let motor = "kawasaki"
// console.log(motor)

// const

// reassign
// const phi = 3.14
// console.log(phi)

// phi = 3.24
// console.log(phi)

// redeclare
// const pha = 3.14
// console.log(phi)

// const pha = 3.24
// console.log(phi)

// arithmetic operation
// + - / *
let tambah = 5+5;
console.log(tambah);

let kurang  = 5-5;
console.log(kurang);

let bagi = 20*5
console.log(bagi)

//comparison and logical operators 
// output = true / false

let equal = (5=="5")
console.log(equal)

let strictequal = (5==="5")
console.log(strictequal)

let notequal = (5!=6)
console.log(notequal)

let notstrictequal = (5!=="5")
console.log(notstrictequal)

let besar = (5<10)
console.log(besar)

let logicalAnd = (true&&true)
console.log(logicalAnd)

let logicalOr = (false||false)
console.log(logicalOr)

let nullishCoalescing = null ?? 'default value'
console.log(nullishCoalescing)

// selection

// if / if else

let umur = 21

if(umur <18){
    console.log("Dibawah umur")
}else{
    console.log("Sudah Dewasa")
}

// nested if
let score = 90
let grade = ""

if(score>=90){
    grade = "A"
}else{
    if(score>=75){
        grade = "B"
    }else{
        grade = "C"
    }
}

console.log("nilai Andi adalah " + grade)

// ternary operator

let umurr = 10;
let status = (umurr>=18) ? "Dewasa" : "Anak-anak"

console.log("Status " +status)

// switch

let day = 2
let dayName = ""

switch(day){
    case 1:
        dayName = "Senin"
    break;
    case 2:
        dayName = "Selasa"
    break;
    case 3:
        dayName = "Rabu"
    break;
}

console.log(dayName)

// looping

// for loop

for(let i=0; i<=5;i++){
    console.log("Loop ke-"+i)
}

// function with parameter
function greet(name){
    console.log("Hello, "+name+ " !")
}

greet("Dave")


// event

let button = document.getElementById('button');

button.addEventListener('click', function(){
    alert("Hello Customers!")
})