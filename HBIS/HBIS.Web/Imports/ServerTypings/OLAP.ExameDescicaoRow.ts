
namespace HBIS.OLAP {
    export interface ExameDescicaoRow {
        IdExameDescricao?: number;
        Descricao?: string;
    }

    export namespace ExameDescicaoRow {
        export const idProperty = 'IdExameDescricao';
        export const nameProperty = 'Descricao';
        export const localTextPrefix = 'OLAP.ExameDescicao';

        export namespace Fields {
            export declare const IdExameDescricao;
            export declare const Descricao;
        }

        [
            'IdExameDescricao',
            'Descricao'
        ].forEach(x => (<any>Fields)[x] = x);
    }
}