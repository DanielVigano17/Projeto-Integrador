import express from 'express';
import path from 'path';
const app = express();
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import createUser from './dao/UsuarioDao.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const port = 3000


// Configuração do motor de visualização
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.render('home')
})

app.get('/login', (req, res) => {
    res.render('login')
})

app.get('/cadastro', (req, res) => {
    res.render('cadastro')
})

app.post('/cadastrar-usuario', async (req,res)=>{
    console.log("Bati aqui", req.body);
    const {nome,senha,email} = req.body;

    const usuarioCriado = await createUser(email, nome, senha);

    if(usuarioCriado != null){
        return res.redirect("/");
    }
})

app.get('/cursos', (req, res) => {
    res.render('cursos')
})

app.get('/cadastro-cursos', (req, res) => {
    res.render('cadastro_curso')
})

app.post('/cadastrar-curso', async (req,res)=>{
    console.log("Bati aqui", req.body);
    const {nome,senha,email} = req.body;

    const usuarioCriado = await createUser(email, nome, senha);

    if(usuarioCriado != null){
        return res.redirect("/");
    }
})

app.get('/detalhes-curso', (req, res) => {
    res.render('detalhes_curso')
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})