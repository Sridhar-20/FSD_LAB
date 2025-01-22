function delayedMessage(msg,delay,callback){
    setTimeout(()=>{
        console.log(msg)
        callback(delay);
    },delay)
}
function Message(delay){
    console.log(`Message is printed after delay time:${delay}`)
}
delayedMessage("Hello CVR!",5000,Message)