const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const path = require('path');
const app = express();

app.use(morgan('combined'));
app.use(helmet());

const PORT = process.env.PORT || 8081;

app.use(express.static('client'));

app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'index.html'));
});

app.listen(PORT);