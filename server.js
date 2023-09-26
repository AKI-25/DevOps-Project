const path = require('path');

const express = require('express');

const app = express();

app.use('/images', express.static(path.join(__dirname, 'images')));

app.use((req, res, next)=>{
    res.setHeader('Access-Control-Allow-Origin','*');
    res.setHeader('Access-Control-Allow-Methods','GET,POST,PUT,PATCH,DELETE');
    res.setHeader('Access-Control-Allow-Headers','Content-Type, Authorization');
    next();
});


app.get("/",(res, req)=>{
    return "Hello world"
});

app.use((error, req, res, next)=>{
    console.log(error);
    const status = error.statusCode || 500;
    const message = error.message;
    const data = error.data;
    res.status(status).json({
        message: message,
        data: data
    })
});

app.listen(3000, 'localhost', () => {
    console.log('Listening for requests on port 3000')
    }
);