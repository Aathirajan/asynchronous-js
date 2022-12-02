const promise1 = new Promise((resolve,reject) => {
    setTimeout(()=>{
      isReady=[true,false][Math.floor(Math.random()*2)]
      isReady ? resolve('The soup Is Ready') :
        reject('the soup is not ready')},2000)
      
    } )
  
  console.log(promise1
              .then(value=>console.log(value))
              .catch(value=>console.log(value)))