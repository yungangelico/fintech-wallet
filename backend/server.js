const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Сервер работает!');
});

app.get('/api/balance', (req, res) => {
    const balance = {
        currency: 'KZT',
        amount: 125000
    };
    res.json(balance);
});

app.listen(3000, () => {
    console.log('Сервер запущен на порту 3000');
});