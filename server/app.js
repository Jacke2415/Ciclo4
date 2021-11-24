import express from 'express';
import path from 'path';

// Initializations
const app = express();

// settings
app.set("port", config.PORT);
app.set("public", path.join(__dirname, "public"));
app.set("public", path.join(__dirname, "public"));