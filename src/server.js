const express = require('express')
const bodyParser = require('body-parser');
const path = require('path');
const app = express()
const port = 1888


// Configuração do motor de visualização
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
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

app.get('/cursos', (req, res) => {
    res.render('cursos')
})

app.get('/cadastro-cursos', (req, res) => {
    res.render('cadastro_curso')
})

app.get('/detalhes-curso', (req, res) => {
    res.render('detalhes_curso')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})