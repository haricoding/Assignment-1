// 1)largest number
let arr1=[13,21,45,56,76,45,98,6,97]
let large = arr1[0]
for(let i=0;i<arr1.length;i++){
    if(large<arr1[i]){
        large=arr1[i]
    }
}
console.log(arr1);
console.log(large);

//using sort method
let arrs = [3, 6, 2, 56, 32, 5, 89, 32];
let largest = arrs.sort((a, b) => {
  return b - a;
})[0];
console.log("the largest number of an array is", largest);

//To find the second largest
let secondarr = [3, 6, 2, 56, 32, 5, 89, 32];

let seconlarge = secondarr.sort((a, b) => b - a)[1];

console.log("the second largest number of an array is", seconlarge);

//2) even and odd
let evens=[]
let odds=[]
for(let i=0;i<arr1.length;i++){
    if(arr1[i]%2===0){
        evens.push(arr1[i])
    }else{
        odds.push(arr1[i])
    }
}
console.log(evens);
console.log(odds);
// using filter method even and odd
evenf=arr1.filter((ele)=>{
    return ele%2===0
})
console.log(evenf);
oddf=arr1.filter((ele)=>{
    return ele%2===1
})
console.log(oddf);
//3)Find the factorial of a number
function factorial(n){
    let fact=1
    for(i=1;i<=n;i++){
        fact = fact*i
    }
    console.log(fact);
}
factorial(5)
//factorial using filter method

//4)Print random number using function
const a= Math.random()
console.log(a);
// Math.random()*(largestnumber - smallestnumber)+smallest number

const b = Math.random()*(100-1)+1
console.log(b);
// using math.floor we get integer value
const c = Math.floor(5.145)
console.log(c);
//rando integer value between 1-100
const d = (Math.floor(Math.random()*(100-1)+1))+1
console.log(d);

//4) Fetch
const url = 'https://jsonplaceholder.typicode.com/posts'
const fetchPosts = () => {
    fetch(url).then((response) => {
        console.log(response);
        return response.json()
    }).then((data) => {
        console.log(data);
        let postsData = '<ul>'
        data.map((post) => {
            // Templete literals (ES6)
            postsData += `<li>${post.title}`
        })
        postsData += '</ul>'
        const divElement = document.getElementById('users')
        divElement.innerHTML = postsData
        console.log('postsData', postsData);
    }).catch(err => {
        console.log(err);
        console.error(err.message);
    })
}
fetchPosts()

function savePost(){
    const post = {
        userId: 1000,
        title: 'Javascript end game',
        body: 'Javascript Javascript'
    }
    fetch(url, {
        method: 'POST',
        body: JSON.stringify(post),
        headers:{
            'Content-Type' : 'application/json'
        }
    }).then((response) => {
        console.log(response);
        return response.json()
    }).then(data => {
        console.log('Added post', data);
    })
}

//5) to print patreen ***
function pattern() {
  var n = "*"
  for (var i = 1; i <= 4; i++) {
    console.log(n.repeat(i));
  }
}

//6) to generate id randomly
//generate id by clicking 
function gen() {
    const jobs = ['DEV', 'TES', 'PRM', 'TCL']
    const job = Math.floor(Math.random() * jobs.length)
    let ran = Math.floor(Math.random() * 253)
  
    let nameId = document.getElementById("generateIds").value
  
    let nameValue = ''
    for (let i = 0; i < 3; i++) {
      nameValue += nameId[i]
    }
    document.getElementById("para").innerText = nameValue.toUpperCase() + "" + jobs[job] + ran
  
  }

  //7)change the colour by dropdown

function changeme(color) {
  document.body.style.background = color
}
//change color by taking input value
function changecol() {
  let co = document.getElementById('changecolorofcolor').value;
  document.body.style.backgroundColor = co;
  document.getElementById("changecolor").value = co
  document.body.style.color = "white"
}

//8) Array destructuring and object destructuring
const person = {
    firstName: 'Ajith',
    lastName: 'K',
    age:10,
    hobbies: ['Cricket', 'Singing'],
    address: {
        state: 'Karnataka',
        picode: '560038',
        city: 'Bangalore'
    }
}
// const firstName = person.firstName
// const lastName = person.lastName
// const age = person.age

// object Destructuring (ES6 feature)
const { firstName, lastName} = person
console.log('firstName', firstName);
console.log('lastName', lastName);

//multi level destructure
const{hobbies, address: {state, city}} = person
console.log('hobbies', hobbies);
console.log('state', state);
console.log('city', city);

//alias names
const {firstName: fname, lastName: lname} = person
console.log(fname);
console.log(lname);
function calculateTotalPrice({gst, price}){
    console.log('gst', gst);
    console.log('price', price);
    return price + (price *gst/100)
}
const product ={
    price: 100,
    gst: 3,
    productName: 'Bag',
    mfYear:2021,
    moreDetails: {
        brand: 'Wildcraft',
        color: 'blue'
    }
}
console.log(calculateTotalPrice(product)); 

console.log('-------array destructuring-----------');
const fruits = ['Apple','Pineapple','orange','Banana']

// const fruit1 = fruits[0]
// const fruit2 = fruits[1]

// Array Destructuring
const [fruit1,fruit2] = fruits
console.log(fruit1);
console.log(fruit2);

const [fruitone,,fruitthree] = fruits
console.log(fruitone);
console.log(fruitthree);

//9) Fibonacci series
function fibonacci(n)
{
let a=0
let b=1
let c
for (let i = 0; i <=n; i++) {
   console.log(a);
 c = a+b
    a=b
    b=c
}
}
console.log(fibonacci(5)); 

//10)bubble sort
function bubbulSort([myyarr])
{
    for(let i=0;i<myyarr.length;i++)
    {
        for(let j=0;j<myyarr.length-i-1;j++)
        {
            if(myyarr[j]<myyarr[j+1])
            {
                temp=myyarr[j]
                myyarr[j]=myyarr[j+1]
                myyarr[j+1]=temp
            }
        }
    }
    console.log("myyarr-",myyarr);
}
myyarr=[7,3,8,4]
console.log(bubbulSort([myyarr]));

let arr5=[3,5,1,6,3]
console.log(arr5.sort(function(a,b){
    return a-b
}))

//11) Prime number
console.log('---------prime number--------------');

function prime(n)
{
    if(n===1){
        console.log('is not prime number');
    }
    else if(n===2){
        console.log('is not prime');
    }
    else
    {
    for(let i=2;i<n;i++)
    {
        if(n%i===0)
        {
            console.log('is not prime');
            return
        }
    }
    console.log('is prime');
  }
}
console.log(prime(11));

//12) loops
console.log('------------forofloop-------');
var numbers = [10,20,30,40]
// for of loop
for (var number of numbers){
    console.log(number);
}
console.log('------------');

var fruits = ['Apple','Mango','Orange','Banana','Pineapple']
for(var fruit of fruits){
    console.log(fruit);
}

console.log('----------forinloop with object---------------');

var person = {
    firstName : 'ajith',
    lastName : 'kumar',
    age: 56,
    gender:'male'

}
for(var key in person){
console.log(`${key} - ${person[key]}`); 

}
console.log('------forinloo with array-------');
for(var index in numbers){
    console.log(`value at index ${index}-${numbers[index]}`);
}

for (var i in fruits){
    console.log(fruits[i]);
}

console.log('-----------');
function test(){
    console.log('test func started');
    if(3<3){
        console.log(i);
    }else{
        /* Illegal break statement
            break statement can be used in loops or
            switch cases. It cannot be used in functions
            or if else statements without loops */
            //break; 
            console.log('break');
    }
    console.log('tet func ended');
}
test()
console.log('---------------------');
var arr = [10,20,30,40,50,,,,,,100]
console.log(arr);
for (var i=0;i<arr.length;i++){
    console.log(`${i} - ${arr[i]}`);
}
console.log('-------------------');
for (var index in arr){
    console.log(`${index} - ${arr[index]}`);
}
console.log('-----------');

var arrData = [10,20,30]
arrData[3] = 80
arrData['price'] = 700
console.log(arrData);
// ignores the elements which doesnot have index
for(var i=0;i<arrData.length;i++){
    console.log(`${i} - ${arrData[i]}`);
}

console.log('--------------');
//considers the elements which does not have the index
for (var i in arrData){
    console.log(`${i} - ${arrData[i]}`);
}

//assignment
 var pens = [
     {
         brand:'parker',
         color:'black',
         price : 125,
         type :'ball point pen'
     },
     {
        brand:'Reynolds',
        color:'blue',
        price : 10,
        type : 'ball point pen'
    },
    {
        brand:'Elkos',
        color:'red',
        price : 5,
        type : 'gel pen'
    }
 ]
 console.log('------------');
 // using for loop if price is > 5 print the object
 for(var i=0;i<pens.length;i++)
 {
     if (pens[i].price > 5){
         
         console.log(pens[i]);
     }
     
 }
console.log('----------');
 
 // for of loop ---> if type==='ball point pen'&& price >5
 for (var pen of pens){
     if(pen.price > 5 && pen.type === 'ball point pen'){
         console.log(pen);
     }
 }
console.log('----------');
 //for in loop > if brand length > 5 && price >10
 for(var index in pens)
 {
     if(pens[index].brand.length > 5 && pens[index].price > 10){
         console.log(pens[index]);
     }
 }