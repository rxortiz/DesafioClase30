function random(num){
   let randoms={}

    for( let i=0; i< num; i++){
        const num = (Math.random()*1000).toFixed(0);
        if(randoms.hasOwnProperty(num)){
            randoms[num] += 1
        }
        else{
            randoms[num]=1
        }
    }
    return JSON.stringify(randoms)
}

process.on("message", (msg =>{
    const array = random(parseInt(msg))
    process.send(array)
}))

export default {random};