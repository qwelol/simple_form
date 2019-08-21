require('dotenv').config();
const { PORT, PUBLIC_PATH, INDEX_FILE } = process.env;
const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(express.static(`${__dirname}/../${PUBLIC_PATH}`));
app.use(bodyParser.json());
app.get('/',(req,res) => {
    res.sendFile(path.resolve(`${__dirname}/../${PUBLIC_PATH}`, INDEX_FILE));;
})
const  server = app.listen(PORT, ()=> {
    console.log('Server is running on port '+PORT);
});
