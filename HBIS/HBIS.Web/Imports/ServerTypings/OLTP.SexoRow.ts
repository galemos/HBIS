
namespace HBIS.OLTP {
    export interface SexoRow {
        IdSexo?: string;
        Descricao?: string;
    }

    export namespace SexoRow {
        export const idProperty = 'IdSexo';
        export const nameProperty = 'Descricao';
        export const localTextPrefix = 'OLTP.Sexo';

        export namespace Fields {
            export declare const IdSexo;
            export declare const Descricao;
        }

        [
            'IdSexo',
            'Descricao'
        ].forEach(x => (<any>Fields)[x] = x);
    }
}