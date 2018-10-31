﻿
namespace HBIS.CRUD {
    export interface TipoSanguineoRow {
        IdTipoSanguineo?: string;
        Descricao?: string;
    }

    export namespace TipoSanguineoRow {
        export const idProperty = 'IdTipoSanguineo';
        export const nameProperty = 'Descricao';
        export const localTextPrefix = 'CRUD.TipoSanguineo';

        export namespace Fields {
            export declare const IdTipoSanguineo;
            export declare const Descricao;
        }

        [
            'IdTipoSanguineo',
            'Descricao'
        ].forEach(x => (<any>Fields)[x] = x);
    }
}