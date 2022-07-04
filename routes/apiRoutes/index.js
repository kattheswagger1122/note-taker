//Route parameters - Express.js-  express.Router() function is used to create a new router object

const router = require('express').Router();

// add our new route
const notesRoutes = require('./noteRoutes')

//"The router.use() function uses the specified middleware function or functions. It basically mounts middleware for the routes which are being served by the specific router."
router.use('/api', notesRoutes)


//module.exports=router is mapping a router 
module.exports = router;

//you have to have express -npm install express
