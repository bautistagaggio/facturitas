import { JSONSchemaType } from "ajv";
import ajvModule from 'ajv';
const Ajv = ajvModule.default;

const ajv = new Ajv();


interface getComprobantesRequestBodySchema {
    numero_de_comprobante: string;
    punto_de_venta: string;
    tipo_de_comprobante: string;
}

const getComprobantesRequestBodySchema: JSONSchemaType<getComprobantesRequestBodySchema> = {
    type: "object",
    properties: {
        numero_de_comprobante: { type: "string" },  
        punto_de_venta: { type: "string" },
        tipo_de_comprobante: { type: "string"},
    },
    required: ["numero_de_comprobante", "punto_de_venta", "tipo_de_comprobante"],
    additionalProperties: false,
};

const validate = ajv.compile(getComprobantesRequestBodySchema);

export { validate, getComprobantesRequestBodySchema };
