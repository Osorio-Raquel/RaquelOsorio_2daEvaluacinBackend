import express from 'express';
import fs from 'fs';
import soap from 'soap';
import path from 'path';
import { fileURLToPath } from 'url';
import { palabrasService } from './controllers/palabrasSoapController.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const app = express();
const port = 8001;

const wsdlXml = fs.readFileSync(path.join(__dirname, 'wsdl', 'palabras.wsdl'), 'utf8');

const server = app.listen(port, () => {
  console.log(`🧼 Microservicio SOAP corriendo en http://localhost:${port}/wsdl`);
});

soap.listen(server, '/wsdl', palabrasService, wsdlXml);
