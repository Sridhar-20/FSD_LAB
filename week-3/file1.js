function Greet(name,callback){
    const msg=`Hello ${name}`
    return callback(msg)
}
function Greetings(msg){
    console.log(`${msg} Welcome`)
}
Name="Sridhar"
Greet(Name,Greetings)
