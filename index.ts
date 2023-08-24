import express, { Express, Request, Response } from 'express';
import { PORT } from "./utils/config";
import { v1Routing } from "./routes/v1";
import { AppDataSource } from "./data-source";
import cors from 'cors';



AppDataSource.initialize().then(() => {
  console.info('Database initialized');
});

const app: Express = express();
const port = PORT;

app.use(express.json());
app.use(express.urlencoded({ extended: true, limit: '30mb' }));
app.use(cors());

app.get('/', (req: Request, res: Response) => {
  res.send('Ethlas Rauan API server');
});
v1Routing(
  app,
);
app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
