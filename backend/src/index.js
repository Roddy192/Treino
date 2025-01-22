import express from "express";
import cors from "cors";
const app = new express();
app.use(express.json());
app.use (
  cors({
    origin: 'http://localhost:5500',
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
  console.log('Olá Mundo');
  res.send("funcionando");

    });

app.listen(3000, ()=> console.log('Server running on port 3000'));

