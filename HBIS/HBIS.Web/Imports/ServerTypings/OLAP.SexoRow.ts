
namespace HBIS.OLAP {
    export interface SexoRow {
        IdSexo?: number;
        Descricao?: string;
    }

    export namespace SexoRow {
        export const idProperty = 'IdSexo';
        export const nameProperty = 'Descricao';
        export const localTextPrefix = 'OLAP.Sexo';

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