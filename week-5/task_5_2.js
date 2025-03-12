const express = require('express');
const app = express();
const port = 3000;

app.get('/html', (req, res) => {
  res.type('html');
  res.send('<html><body><h1>Hello, this is an HTML response!</h1></body></html>');
});

app.get('/json', (req, res) => {
  res.json({ message: 'Hello, this is a JSON response!' });
});

app.get('/text', (req, res) => {
  res.type('text');
  res.send('Hello, this is a plain text response!');
});
app.get('/', (req, res) => {
  res.send('<h1>Welcome to the Express Server!</h1><p>Use the following endpoints:</p><ul><li>/html</li><li>/json</li><li>/text</li></ul>');
});
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
