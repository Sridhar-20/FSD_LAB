const person = {
    name: "Alice", 
    address: {
        street: "123 Main St",
        city: "Los Angeles", 
        zip: "90001"}, 
    age: 25
};

const{street,city}=person.address
console.log(street)
console.log(city)