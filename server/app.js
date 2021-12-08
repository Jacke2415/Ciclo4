const express = require("express");
/* const dotenv = require("dotenv"); */
const userRoutes = require("./routes/User");
const cors = require("cors");
const morgan = require("morgan");
import './database'


//initialization
/* dotenv.config(); */
const app = express();


// Settings 
app.set('port', process.env.PORT || 5000);

// Middlewares
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());


//Routes
app.use("/users", userRoutes);

// Starting the server
app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`);
  });