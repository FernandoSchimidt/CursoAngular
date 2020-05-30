const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const department_controller = require('./controllers/department_controller');
const products_controller = require('./controllers/product_controller');
const connection = require('./database/database');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(cors());

//Database
connection
    .authenticate()
    .then(() => {
        console.log('Conexao feita com uscesso');
    }).catch((error) => {
        console.log(error)
    })

//rotas
app.use('/departments', department_controller);
app.use('/products', products_controller);


//pagina inicial
app.get('/', (req, res) => {
    res.send('Bem Vindo')
})
app.listen(3000, () => {
    console.log('Server Running')
});