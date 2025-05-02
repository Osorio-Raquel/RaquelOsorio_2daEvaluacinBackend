// controllers/palabrasSoapController.js
import axios from 'axios';

const BACK_API_URL = 'http://localhost:3000/api/filtrado'; // Asegúrate que esté corriendo tu back

export const palabrasService = {
  PalabrasService: {
    PalabrasPort: {
      async obtenerFrecuentes(_, callback) {
        try {
          const res = await axios.get(`${BACK_API_URL}`);
          callback(null, { resultado: JSON.stringify(res.data.top_palabras) });
        } catch (error) {
          callback({ fault: { faultstring: 'Error al consumir API REST de palabras frecuentes' } });
        }
      },
      async obtenerPopulares(_, callback) {
        try {
          const res = await axios.get(`${BACK_API_URL}/populares`);
          callback(null, { resultado: JSON.stringify(res.data.populares) });
        } catch (error) {
          callback({ fault: { faultstring: 'Error al consumir API REST de palabras populares' } });
        }
      }
    }
  }
};
