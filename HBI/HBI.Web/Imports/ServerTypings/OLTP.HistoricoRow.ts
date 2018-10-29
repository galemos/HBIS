
namespace HBI.OLTP {
    export interface HistoricoRow {
        IdHistorico?: string;
        IdPaciente?: string;
        Carboidrato?: number;
        Data?: string;
        GlicemiaAtual?: number;
        Insulina?: number;
    }

    export namespace HistoricoRow {
        export const idProperty = 'IdHistorico';
        export const localTextPrefix = 'OLTP.Historico';

        export namespace Fields {
            export declare const IdHistorico;
            export declare const IdPaciente;
            export declare const Carboidrato;
            export declare const Data;
            export declare const GlicemiaAtual;
            export declare const Insulina;
        }

        [
            'IdHistorico',
            'IdPaciente',
            'Carboidrato',
            'Data',
            'GlicemiaAtual',
            'Insulina'
        ].forEach(x => (<any>Fields)[x] = x);
    }
}