function calculateTotal(...numbers) {
    return numbers.reduce((sum, num) => sum + num, 0);
}
const res=calculateTotal(10,20,30,40)
console.log(res)
