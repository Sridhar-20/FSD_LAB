const apiURL = 'https://jsonplaceholder.typicode.com/users';

fetch(apiURL)
    .then(response => {
        if (!response.ok) throw new Error('Network response was not ok');
        return response.json();
    })
    .then(data => {
        const tableBody = document.getElementById('data-table').querySelector('tbody');
        tableBody.innerHTML = ''; // Clear previous data

        data.forEach(({ id, name, email }) => {
            const row = tableBody.insertRow();
            row.insertCell(0).textContent = id;
            row.insertCell(1).textContent = name;
            row.insertCell(2).textContent = email;
        });
    })
    .catch(error => console.error('Fetch error:', error));
