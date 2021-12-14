const express = require("express");
const dotenv = require("dotenv");
const userRoutes = require("./routes/User");
const cors = require("cors");
const morgan = require("morgan");
const database = require('./database');
const singinRoutes = require("./routes/Singin");

//initialization
var corsOptions = {
  origin: "http://localhost:3000",
  optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
  credentials: true,
}; 

const app = express();


// Settings 
app.set('port', process.env.PORT || 5000);

// Middlewares
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors(corsOptions));


//Routes
app.use("/users", userRoutes);
app.use("/singin", singinRoutes);
app.get('/cookie',function(req, res){
  res.cookie('cookie_name' , 'Daniel').send('Cookie is set');
});
// Starting the server
app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`);
  });