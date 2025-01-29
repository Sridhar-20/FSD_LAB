const apiKey = '8fa2da659a9e829cbbeb81d0f0d88fe7';

document.getElementById('button').addEventListener('click', () => {
    const city = document.getElementById('cityInput').value;
    const apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(apiURL)
        .then(response => {
            if (!response.ok) throw new Error('City not found');
            return response.json();
        })
        .then(data => {
            const { name, main: { temp_min, temp_max, humidity } } = data;
            const tableBody = document.getElementById('weather-table').getElementsByTagName('tbody')[0];
            tableBody.innerHTML = ''; // Clear previous data

            const row = tableBody.insertRow();
            row.insertCell(0).textContent = name;
            row.insertCell(1).textContent = temp_min;
            row.insertCell(2).textContent = temp_max;
            row.insertCell(3).textContent = humidity;
        })
        .catch(error => {
            alert(error.message);
            console.error('Error fetching weather data:', error);
        });
});

document.getElementById('forecastButton').addEventListener('click', () => {
    const city = document.getElementById('cityInput').value;
    const apiURL = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`;

    fetch(apiURL)
        .then(response => {
            if (!response.ok) throw new Error('City not found');
            return response.json();
        })
        .then(data => {
            const tableBody = document.getElementById('forecast-table').getElementsByTagName('tbody')[0];
            tableBody.innerHTML = ''; // Clear previous data

            data.list.forEach(({ dt, main: { temp } }) => {
                const date = new Date(dt * 1000).toLocaleDateString(); // Convert timestamp to date
                const row = tableBody.insertRow();
                row.insertCell(0).textContent = date;
                row.insertCell(1).textContent = temp;
            });
        })
        .catch(error => {
            alert(error.message);
            console.error('Error fetching weather forecast:', error);
        });
});
