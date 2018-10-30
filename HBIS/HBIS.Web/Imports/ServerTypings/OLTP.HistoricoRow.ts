namespace HBIS.OLTP {
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

        export declare const enum Fields {
            IdHistorico = "IdHistorico",
            IdPaciente = "IdPaciente",
            Carboidrato = "Carboidrato",
            Data = "Data",
            GlicemiaAtual = "GlicemiaAtual",
            Insulina = "Insulina"
        }
    }
}

