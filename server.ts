import express, { Application, Request, Response } from 'express';
import { afipService } from './src/afip_service.js'

const app: Application = express();
const port: number = 3000;

app.get('/comprobantes', async (req: Request, res: Response) => {

  // const id = parseInt(req.params.id, 10);

  // if (isNaN(id)) {
  //   return res.status(400).json({ error: 'ID must be a number' });
  // }

  try {
    const data = await afipService.getComprobantes();
    console.log('Fetched Data:', data); 
    res.status(200);
    res.json(data);

  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error(error.message);
    } else {
      console.error('An unknown error occurred');
    }
}});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});