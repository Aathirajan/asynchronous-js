const promise1 = new Promise((resolve,reject) => {
    setTimeout(()=>{
      isReady=[true,false][Math.floor(Math.random()*2)]
      isReady ? resolve('The soup Is Ready') :
        reject('the soup is not ready')},2000)
      
    } )

    let soupInfo = async () => {

        let data ={rating:0,tip:0,pay:0}
        try {
      let soup= await promise1
      console.log(soup)
          data.rating=5
          data.tip=10
          data.pay=50
          return data
        
        }
        catch(error){
            console.log(error)
              data.rating=1
                data.tip=0
                data.pay=0
                return data
              
          }}
          soupInfo().then(data=>console.log(data))