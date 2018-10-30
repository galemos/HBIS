namespace HBIS.OLTP {
    export interface ExameRow {
        IdExame?: string;
        IdPaciente?: string;
        Crm?: string;
        TituloExame?: string;
        Resultado?: number;
    }

    export namespace ExameRow {
        export const idProperty = 'IdExame';
        export const nameProperty = 'Crm';
        export const localTextPrefix = 'OLTP.Exame';

        export declare const enum Fields {
            IdExame = "IdExame",
            IdPaciente = "IdPaciente",
            Crm = "Crm",
            TituloExame = "TituloExame",
            Resultado = "Resultado"
        }
    }
}

