
namespace HBIS.OLAP {
    export interface MedicoRow {
        Crm?: string;
        Cpf?: string;
        Nome?: string;
        Email?: string;
    }

    export namespace MedicoRow {
        export const idProperty = 'Crm';
        export const nameProperty = 'Crm';
        export const localTextPrefix = 'OLAP.Medico';

        export namespace Fields {
            export declare const Crm;
            export declare const Cpf;
            export declare const Nome;
            export declare const Email;
        }

        [
            'Crm',
            'Cpf',
            'Nome',
            'Email'
        ].forEach(x => (<any>Fields)[x] = x);
    }
}