// // var people = [
// //     {
// //         name: "tung",
// //         age: 18
// //     },
// //     {
// //         name: "Vy",
// //         age: 19
// //     }
// // ]
// //  var newPeople = people.map( (value, index) => {
// //     value.name = `My name is ${value.name}`
// //     return value;
// //  })

// //  console.log(newPeople)
// // import axios, { get } from 'axios'
// // const getBreeds = async (url) => {
// //     try {
// //        let response = await axios.get(url)
// //        return response
// //     } catch (error) {
// //       console.error(error)
// //     }
// //   }

// //   console.log(getBreeds('https://jsonplaceholder.typicode.com/todos/1'))

// const axios = require('axios')

// const getBreeds = async () => {
//   try {
//     let response = await axios.get('https://jsonplaceholder.typicode.com/todos/1')
//     console.log(response.data.title)
//     return response
//   } catch (error) {
//     console.error(error)
//   }
// }

// function Todo (userId, id, title, completed) {
//     this.userId = userId,
//     this.id = id,
//     this.title = title,
//     this.completed = completed
// }
// const countBreeds = async () => {
//   const breeds = await getBreeds()
//     let todo = new Todo();
    //  = breeds.data;
//     console.log(todo.title);
// }

// countBreeds()

// let a =  ['tung', 'pham', 'sdfsd'];
// // a.shift();
// for(let i = 0; i<a.length; i++) {
//     a[i] = a[i+1];
// }
// // a[2]
// // a[a.length-1] = undefined
// console.log(a.length)

// function pr(a) {
// console.log(a)
// }
// let name = 'dsf'
// pr('t','u')

// function notHell(value) {
//     return new Promise(function (resolve) {
//         resolve(value);
//     });
// }

// notHell(1)
//     .then(function (value) {
//         console.log(value +1)
//         return value + 1;
        
//     })
//     .then(function (value) {
//         console.log(value +1)
//         return value + 1;
//     })
//     .then(function (value) {
//         console.log(value +1)
//         return value + 1;
//     })
//     .then(function (value) {
//         console.log(value + 1);
//     });
var array = [1,4,3,9,5,3,4]
for(let i = 0 ;i < array.length; i++) {
    for(let j = array.length- 1; j > i; j--) {
        if(array[j] < array[j-1]) {
            let tmp = array[j]
            array[j] = array[j-1]
            array[j-1]= tmp
            // console.(array[j])
        }
    }
}
console.log(array)

// for()