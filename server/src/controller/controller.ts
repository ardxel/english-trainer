import express, {NextFunction, Request, Response} from 'express';
import bodyParser from "body-parser";
import cors from 'cors';
import Model from "../model/model.ts";
import { Word } from "../model/model_word.ts";
const app = express();

app.use(bodyParser.urlencoded({extended: false}))

app.use(bodyParser.json());

app.use(cors())

app.use((req: Request, _ ,next: NextFunction) => {
  console.log(`Got request: ${req.method} ${req.url} `);
  next();
})

interface RequestAddWord extends Request {
  body: Word
}

app.post('/addWord', (req: RequestAddWord, res: Response) => {
  const {name, keys} = req.body;

  Model.words.create({name, keys});

  res.status(200);
})

app.get('/allWords', (req,res) => {
  const words = Model.words.getAll();

  res.status(200).json(words);
})
app.listen(3000, () => {
    console.log('Server listened on 3000 port')
})
