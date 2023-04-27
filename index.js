const  express = require ('express');
const {connect} = require("./db/config");
const { Router } = require('./routes/Routes');
const cors = require ('cors');
const bodyParser = require('body-parser');

require("dotenv").config()


const app = express();
connect();
app.use(cors());
app.use(bodyParser.json());

app.use("/", Router)
app.listen(process.env.PORT, () => {
    console.log('Server runing', process.env.PORT);
});