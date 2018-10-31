
namespace HBIS.CRUD {
    export interface ExameDescicaoRow {
        IdExameDescricao?: string;
        Descricao?: string;
    }

    export namespace ExameDescicaoRow {
        export const idProperty = 'IdExameDescricao';
        export const nameProperty = 'Descricao';
        export const localTextPrefix = 'CRUD.ExameDescicao';

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