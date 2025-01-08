//__proto__

let obj1 = {
    fname: "Abhinash"
}
console.log(obj1)

let obj2 = {
    lname: "Gunreddy",
    __proto__: obj1
}
console.log(obj2);

//__prototype__

function Base() {
    this.x = 100
}
Base.prototype.z = 300
let object1 = new Base()
console.log(object1)

function Derived() {
    Base.call(this)
    this.y = 200
}
Derived.prototype = Object.create(Base.prototype)// used to access even prototype property from obj 1
let object2 = new Derived()
console.log(object2)
console.log(object2.z)// to access the prototype property z from obj 1 

