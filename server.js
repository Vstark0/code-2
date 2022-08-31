const express = require ('express')
const app = express();
const cors = require('cors')

app.use(cors());
app.use(express.json());

const inventory = ['greeting card', 'wagon', 'computer', 'table', 'desk' ];

app.get('/api/inventory', (req, res) => {
    console.log('in the "/api/inventory" endpoint callback');
    res.status(200).send(inventory);
});

app.get('/api/inventory/', (req, res) => {
    console.log('in the "/api/inventory/:index" endpoint callback');
    console.log(req.params.index);
});

const SERVER_PORT = 5050;
app.listen(SERVER_PORT, () => console.log('listening on port ${SERVER_PORT}'))

