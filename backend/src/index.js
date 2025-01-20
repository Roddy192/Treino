import express from "express";
import cors from "cors";
const app = new express();
import con from './connection.js'

app.use(cors({origin:'http://127.0.0.1:5500/' }))


app.get('/', (req, res) => {
    con.query('SELECT * FROM contatos', (err, result) => {
      if (err) {
        res.send(err)
      }
      const resultado = result;
      console.log(result);
      res.send(result);
    })
});

app.listen(3000, ()=> console.log('Server running on port 3000'));

