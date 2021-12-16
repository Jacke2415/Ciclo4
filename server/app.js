const express = require("express");
/* const dotenv = require("dotenv"); */
const nominaRoutes = require("./routes/Nomina");
const cors = require("cors");
const morgan = require("morgan");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const database = require ('./database');
const UserRoutes = require("./routes/User");
const UserAdmin = require("./routes/UserAdmin");
const { requireAuth } = require("./middleware/userMiddleware");

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
app.use(cookieParser());
app.use(cors(corsOptions));

//Routes

app.use("/nominas", nominaRoutes);
app.use("/", UserRoutes);
app.use("/signin", requireAuth, UserAdmin);

// Starting the server
app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`);
  });
  app.use((req, res, next) => { //This middleware checks the local user
    res.locals.user = req.user
    next()
  })