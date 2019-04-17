const cors = require('cors');
const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const vendedor = require('./src/routes/vendedor.router');
const imgPerfil = require('./src/routes/img_perfil.router');
const cliente = require('./src/routes/cliente.router');
const auth = require('./src/auth/auth.router');
const administrador = require('./src/routes/administrador.router');

const bodyParserJSON = bodyParser.json();
const bodyParserUrlEncoded = bodyParser.urlencoded({extended: true});


app.set('port', 3000);

app.use(cors());
app.use(express.json());
app.use(bodyParserJSON);
app.use(bodyParserUrlEncoded);
app.use(vendedor);
app.use(imgPerfil);
app.use(cliente);
app.use(auth);
app.use(administrador);

app.listen(app.get('port'), () =>{
    console.log("server on port ", app.get('port'))
});