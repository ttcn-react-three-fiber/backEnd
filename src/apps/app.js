const express = require('express');
const app = express();
const config = require('config');

//	config ejs template engine	
app.set("views", config.get("app").views_folder);
app.set("view engine", config.get("app").view_engine);

//config static folder
app.use("/static", express.static(config.get("app").static_folder));

// confg get form data 
app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.use(require('../routers/web'))

module.exports = app;