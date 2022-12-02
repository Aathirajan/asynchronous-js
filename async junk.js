// const promise1 = new Promise((resolve,reject) => {
//   setTimeout(()=>{
//     isReady=[true,false][Math.floor(Math.random()*2)]
//     isReady ? resolve('The soup Is Ready') :
//       reject('the soup is not ready')},2000)

// //   } )

// console.log(promise1
//             .then(value=>console.log(value))
//             .catch(value=>console.log(value)))

// https://dog.ceo/api/breeds/image/random
//rules for async:
// 1. need async function(only inside a function)
//   2. keyword async
// 3. for response write fetch('url')
// 4. then pass it to await(await (fetch('url')))




// const getDog= async () => {
//   let url='https://dog.ceo/api/breeds/image/random'
//   let response = await fetch(url)
//   let data = await response.json() 
//   console.log(data)
// }
// getDog()


// const promise1 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     isReady = [true, false][Math.floor(Math.random() * 2)]
//     isReady ? resolve('The soup Is Ready') :
//       reject('the soup is not ready')
//   }, 2000)

// })// console.log(promise1
//             .then(value=>console.log(value))
//             .catch(value=>console.log(value)))


// let soupInfo = async () => {

//   let data = { rating: 0, tip: 0, pay: 0 }
//   try {
//     let soup = await promise1
//     console.log(soup)
//     data.rating = 5
//     data.tip = 10
//     data.pay = 50
//     return data

//   }

//   catch (error) {
//     console.log(error)
//     data.rating = 1
//     data.tip = 0
//     data.pay = 0
//     return data

//   }
// }
// soupInfo().then(data => console.log(data))

let sum= async (a,b)=>  a+b
sum(1,2).then(value=>console.log(value))