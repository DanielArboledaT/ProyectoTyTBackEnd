const cors = require('cors');
const express = require('express');
const app = express();
const vendedor = require('./src/routes/vendedor.router');
const imgPerfil = require('./src/routes/img_perfil.router');
const cliente = require('./src/routes/cliente.router');

app.set('port', 3000);

app.use(cors());
app.use(express.json());
app.use(vendedor);
app.use(imgPerfil);
app.use(cliente);

app.listen(app.get('port'), () =>{
    console.log("server on port ", app.get('port'))
});