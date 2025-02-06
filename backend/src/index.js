import express from "express";
import cors from "cors";
const app = new express();
app.use(express.json());
app.use (
  cors({
    origin: '*',
    methods: ['GET', 'POST', 'PUT','DELETE'],
    allowedHeaders: ['Content-Type'],

  })
);
import con from './connection.js'

app.use(cors({origin:true, credentials: true }))






app.get('/get', (req, res) => {
    con.query('SELECT * FROM contatos', (err, result) => {
      if (err) {
        res.send(err)
      }
      const resultado = result;
      console.log(result);
      res.send(result);
    })
});

app.post('/add', (req, res) => {
  const nome = req.body.nome;
  const email = req.body.email;
  const telefone = req.body.telefone;
  con.query('INSERT INTO contatos (nome, email, telefone) VALUES (?, ?, ?)', [nome, email, telefone]);
  console.log(req.body);
  console.log(nome);
    });


app.post('/delete', (req, res) => {
  const id = req.body.id;
  con.query('DELETE FROM contatos WHERE id=?', [id]);
  console.log(req.body);
  console.log(nome);
    });

  

app.listen(3000, ()=> console.log('Server running on port 3000'));

