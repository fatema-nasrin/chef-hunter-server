const express = require ('express');
const app = express();
const cors = require('cors')
const port = process.env.PORT || 5000;

const chefData = require('./chef-data.json')

app.use(cors());

app.get('/', (req, res) => {
    res.send('dragon is running')
});

app.get('/chefs',(req, res) => {
    res.send(chefData);
})

app.listen(port, () => {
    console.log('dragon api is running: ${port}')
})