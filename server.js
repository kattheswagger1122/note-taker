//asking app to listen on port 3306 -in the terminal it should say now listening on port.
const PORT = process.env.PORT || 3306;

//make sure you have express installed npm install express --save
const express = require('express');
const app = express();

const fs = require('fs');
const path = require('path');

//this link talks about understanding and keeping routes organized
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');


//urlencoded() function = a built-in middleware function in Express
app.use(express.urlencoded({
    extended: true
}));

//adds a middleware - To serve static files such as images, CSS files, and JavaScript file
app.use(express.static('public'));
app.use(express.json());

//"bringing in Express and our routes. We are connecting our routes to our application using .use"
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

//function is used to bind and listen the connections on the specified host and port
app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
});


//node server.js
//npm install -g nodemon then nodemon server.js
//i prefer running my programs with Nodemon file.js so that i don't have to exit and restart the server
//you can use control c to exit the process at anytime (that is on a mac it ma