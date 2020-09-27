const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();

app.use(cors());
app.use(bodyParser.json());

const user = ['kutta', 'bilai', 'goru']

app.get('/', (req, res) => {
    const fruit = {
        product: 'ada',
        price: 220
    }
    res.send(fruit);
})

app.get('/fruits/banana', (req, res) => {
    res.send({fruit: 'banana', quantity: 1000, price:10000});
})

app.get('/user/:id', (req, res) => {
    const id = req.params.id;
    const name = user[id];
    res.send({id, name});
})


//post
app.post('/addUser', (req, res) => {
    //save to databased
    const user = req.body;
    user.id = 109;
    res.send(user);
})


app.listen(4000, () => console.log('Listening to port 3000'));