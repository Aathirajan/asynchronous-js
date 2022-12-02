const promise1 = new Promise((resolve,reject) => {
    setTimeout(()=>{
      isReady=[true,false][Math.floor(Math.random()*2)]
      isReady ? resolve('The soup Is Ready') :
        reject('the soup is not ready')},2000)
      
    } )

    let promiseme = async () => {
        try {
      let soup= await promise1
      console.log(soup)}
         
    catch(error){
      console.log(error)
    }}
    
    
    promiseme()