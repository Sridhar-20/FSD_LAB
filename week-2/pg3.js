function updateEmp(employee,newRole){
   return{...employee,
    role:newRole}
}
const employee = {name: 'Afroz', role: 'Developer', age: 28, location: 'IN'}
console.log(employee)
const res=updateEmp(employee,'Senior Developer')
console.log(res)