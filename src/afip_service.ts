import { apiHelper } from './api_helper.js';
import Afip from '@afipsdk/afip.js';

export class afipService {

    afip = new Afip({ CUIT: 20409378472 });
    static serviceInstance: afipService;
    private CUIT?: string;

    async init() {
        try {
            console.log("hola")
        }
        catch (err) {
            console.log('Error caught trying to initialize CalendarService: %O', err);
          }
        }
    
    static async getInstance(): Promise<afipService> {
        console.log('getInstance called');
        if (!this.serviceInstance) {
          console.log('Creating afipService');
          this.serviceInstance = new afipService();
          console.log('calling service.init()');
          await this.serviceInstance.init();
          console.log('calling service.init() complete');
        } else {
          console.log('serviceInstance is defined');
        }
        return this.serviceInstance;
      }
    
    static async getComprobantes(numero_de_comprobante: number, punto_de_venta: number, tipo_de_comprobante: number) {
        const handler = await afipService.getInstance();
        const comprobantes = await apiHelper.getComprobanteByType(handler.afip, numero_de_comprobante,punto_de_venta, tipo_de_comprobante);
        return comprobantes;
    }


}