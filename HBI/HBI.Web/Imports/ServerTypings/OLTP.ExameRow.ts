
namespace HBI.OLTP {
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

        export namespace Fields {
            export declare const IdExame;
            export declare const IdPaciente;
            export declare const Crm;
            export declare const TituloExame;
            export declare const Resultado;
        }

        [
            'IdExame',
            'IdPaciente',
            'Crm',
            'TituloExame',
            'Resultado'
        ].forEach(x => (<any>Fields)[x] = x);
    }
}