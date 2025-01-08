function createProfile({ name, email }) {
    return { name, email };
  }
  const user = {
    name: 'John Doe',
    age: 30,
    email: 'johndoe@example.com',
    address: '123 Main St'
  };
  
  const profile = createProfile(user);
  console.log(profile); 