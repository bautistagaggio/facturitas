import Afip from '@afipsdk/afip.js';
import { afipService } from 'afip_service.js';

export abstract class apiHelper {

    static async getComprobanteByType(afip) {
        try {    
            const puntoDeVenta = 1;
            const tipoDeComprobante = 6;
            const numerodeComprobante = 2425; // 6 = Factura B
            const lastVoucher = await afip.ElectronicBilling.getVoucherInfo(numerodeComprobante,puntoDeVenta, tipoDeComprobante);
            return lastVoucher;
    } catch (error) 
    {
        console.error('Error:', error);
    }
    }
}
