import 'babel-polyfill';
import {MONGO_CONFIG} from './config/mongoConnectConfig'
const express    = require('express');
const mongoose   = require('mongoose');
const bodyParser = require('body-parser');
const app        = express();
const port       = process.env.PORT || 5000;
const routes    = require('./routes/');

mongoose.Promise = global.Promise;
mongoose.connect(PROD_MONGODB, {
    useMongoClient: true
    /* other options */
});

var normalizedPath = require("path").join(__dirname, "services/model/");

require("fs").readdirSync(normalizedPath).forEach(function(file) {
    require("./services/model/" + file);
});

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


routes(app);

app.listen(port, function(){
    console.log("we are live on port number", port)
});