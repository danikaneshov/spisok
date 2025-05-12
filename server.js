const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

// Раздача статических файлов
app.use(express.static(path.join(__dirname, 'public')));

// Все запросы перенаправляем на index.html
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Запуск сервера
app.listen(port, () => {
    console.log(`Сервер запущен на порту ${port}`);
});
