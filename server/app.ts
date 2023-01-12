import express from 'express';
import { Request, Response, Application } from 'express';
import bodyParser from 'body-parser';

const app: Application = express();

app.use(function(_, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  next();
});

app.use(express.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

app.get('/api/test', (_req: Request, res: Response) => {
  return res.status(200).json({ test: 'is working as it should' });
});

const puppyData = require('./puppyData.json');

interface IPuppies {
  puppyId: number;
  name: string;
  breed: string;
  dob: string
}

app.get('/api/puppies', (_req: Request, res: Response) => {
  return res.status(200).json(puppyData);
});

app.get('/api/puppies/:id', (req: Request, res: Response) => {
  const id = Number(req.params.id);

  const puppy = puppyData.puppies.find((puppy: IPuppies) => puppy.puppyId === id);
  
  if (puppy) {
    return res.status(200).json(puppy);
  } else {
    return res.status(404).json({ error: 'Puppy not found' });
  }
});

app.post('/api/puppies', (req: Request, res: Response) => {
  const newPuppyData = req.body;
  const newPuppyId = Number(puppyData.puppies[puppyData.puppies.length -1].puppyId) + 1;

  const newPuppy = {
    puppyId: newPuppyId,
    name: newPuppyData.name,
    dob: newPuppyData.dob,
    breed: newPuppyData.breed
  }

  puppyData.puppies.push(newPuppy);
  
  return res.status(201).json(newPuppy);
});

app.put('/api/puppies/:id', (req: Request, res: Response) => {
  const id = Number(req.params.id);

  const puppy = puppyData.puppies.find((puppy: IPuppies) => puppy.puppyId === id);

  if (puppy) {
    puppy.name = req.body.name;
    puppy.dob = req.body.dob;
    puppy.breed = req.body.breed;
    return res.status(200).json(puppy);
  } else {
    return res.status(404).json({ error: 'Puppy not found' });
  }
});

app.delete('/api/puppies/:id', (req: Request, res: Response) => {

  const id = Number(req.params.id);

  const puppy = puppyData.puppies.find((puppy: IPuppies) => puppy.puppyId === id);

  if (puppy) {
    const index = puppyData.puppies.indexOf(puppy);
    puppyData.puppies.splice(index, 1);
    return res.status(200).json(puppy);
  } else {
    return res.status(404).json({ error: 'Puppy not found' });
  }
});



export default app;
