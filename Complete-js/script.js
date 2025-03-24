// Call
function greet(){
        console.log('Hello '+ this.name + '!')
}

const person2 = {name: 'Steve'}

greet.call(person2) 

//Apply

function sayHi(city, country, age){
    console.log("I'm " + this.name + " and I'm from " + city + ", " + country + " aged " + age)
}

const person3 = {name: 'Tony Stark'}

sayHi.apply(person3, ["New Jersey", "USA", 35])

//Bind

function sayHello(){
    console.log('Hello ' + this.name)
}

const person4 = {name: 'Tony Stark'}

const sayHelloPerson = sayHello.bind(person4)

sayHelloPerson()


// Prototypal Inheritance

function makeHuman(name, age){
    this.name = name;
    this.age = age;
}

makeHuman.prototype.greet = function(){
    console.log('Hello ' + this.name + '!')
}

const human1 = new makeHuman('Tony Stark', 35)
const human2 = new makeHuman('Steve Rogers', 110)
human1.greet()
human2.greet()


// Closures

function outerFunction(){
    let a = 10;
    return function innerFunction(){
        console.log(a)
    }
}

let ans = outerFunction()
ans()

// Event Delegation

let parent = document.querySelector("#parent")

parent.addEventListener("click", function(event){
    if(event.target.id === 'play'){
        console.log('Playing the song'); 
    }else if(event.target.id === 'pause'){
        console.log('Song is paused'); 
    }else if(event.target.id === 'restart'){
        console.log('Restarting the song'); 
    }
})

// Try and Catch

function divide(a,b){
    try{
        if(b == 0){
            throw Error('Divide by zero error');
        }

        console.log(a/b);
    }
    catch(error){
        console.error(error);
    }
}

divide(13, 0)

// setTimeout

// setTimeout(()=>{
//     console.log('Aeeeee its been 6 seconds')
// }, 6000)

// setInterval

// let count = 0;
// let interval = setInterval(()=>{
//     count++
//     console.log(count)
//     if(count === 5){
//         clearInterval(interval)
//     }
// }, 1000)

// Fetch API

// fetch(`https://jsonplaceholder.typicode.com/todos/1`)
// .then(raw=>raw.json())
// .then(res=>{
//     console.log(res.title)
// })

// Axios (Same but more developer friendly...)

// axios.get(`https://jsonplaceholder.typicode.com/todos/1`)
// .then(res=>{
//     console.log(res)
// })

//Promises

// const dew = new Promise((resolve, reject)=>{
//     axios(`https://randomuser.me/api/`)
//     .then(res=>{
//         if(res.data.results[0].gender == 'male') resolve();
//         else reject()
//     })
// })

// dew
// .then(()=>{
//     console.log("The Person is Male");
    
// })
// .catch(()=>{
//     console.log("The Person is Female");
    
// })


// Callbacks

// const first = (url, callback)=>{
//     fetch(url)
//     .then(raw => raw.json())
//     .then(result =>{
//         callback(result)
//     })
// }

// first('https://randomuser.me/api/', (result)=>{
//     console.log(result.results[0].gender, result.results[0].email, result.results[0].name.first )
// })

// Async/Await

// const fetchData = async ()=>{
//     let response = await fetch(`https://randomuser.me/api/`)
//     let data = await response.json()
//     console.log(data)
// }

// fetchData()


// Callback vs Promises vs Async/Await

//Callback
const abcd = (url, callback)=>{
    fetch(url)
    .then(res=>res.json())
    .then(res=>{
        callback(res)
    })
}
abcd("https://randomuser.me/api/", (res)=>{
    console.log(res.results[0].gender)
})

// Promises
  
const few = new Promise((resolve, reject)=>{
    fetch(`https://randomuser.me/api/`)
    .then(raw => raw.json())
    .then(raw=>{
        if(raw.results[0].gender == 'male') resolve()
        else reject()
    })
})

few
.then(()=>{
    console.log('Code chla')
})
.catch(()=>{
    console.log('code chuda')

})


// Async/Await

const bcd = async ()=>{
    let response = await fetch(`https://randomuser.me/api/`)
    let data = await response.json()
    console.log(data.results[0].gender)

}

bcd()