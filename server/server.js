const path = require('path');
const express = require('express');
const app = express();
const publicPath = path.join(__dirname, '..', 'public');

app.use(express.static(publicPath));

//returing fallback 404 notfound request
app.get('*',(req, res) => {
    res.sendFile(path.join(publicPath, 'index.html'));
});

//port to use to run on your browser
app.listen(3000,() => {
    console.log('server is up!');
});