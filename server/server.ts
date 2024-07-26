import express, { Application, Request, Response } from 'express';
import { afipService } from '../src/afip_service.js'
import { validate } from './schemas/getComprobantesReqBody.js';

const app: Application = express();
const port: number = 3000;
app.use(express.json());

app.post('/comprobantes', validateRequestBody, async (req: Request, res: Response) => {

  const params = req.body;
  console.log(params);

  const punto_de_venta = parseInt(params.punto_de_venta);
  const tipo_de_comprobante = parseInt(params.tipo_de_comprobante);
  const numero_de_comprobante = parseInt(params.numero_de_comprobante);

  console.log('getComprobantes called with params: params %s', params);
  try {
    const data = await afipService.getComprobantes(numero_de_comprobante, punto_de_venta, tipo_de_comprobante);
    console.log('Fetched Data:', data);
    res.status(200);
    res.json(data);

  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error(error.message);
    } else {
      console.error('An unknown error occurred');
    }
  }
}
);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

function validateRequestBody(req: Request, res: Response) {
  const valid = validate(req.body);
  if (!valid) {
      return res.status(400).json({
          message: 'Invalid request data',
          errors: validate.errors,
      });
  }
}