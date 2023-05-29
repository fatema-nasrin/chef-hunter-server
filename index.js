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

app.get('/chefs/:id', (req, res) =>{
    const id = req.params.id;
    const selectedRecipe = chefData.find(c => c.id === id);
    res.send(selectedRecipe)
})



app.get('/' ,(req,res) => {
    res.send('chef hunter server is running')
})

app.listen(port, () => {
    console.log('chef hunter server is running on: ${port}')
})