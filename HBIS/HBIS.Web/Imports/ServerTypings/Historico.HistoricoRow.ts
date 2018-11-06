namespace HBIS.Historico {
    export interface HistoricoRow {
        IdHistorico?: number;
        Cpf?: string;
        IdPeriodo?: number;
        IdData?: string;
        GlicemiaAntes?: number;
        GlicemiaDepois?: number;
        InsulinaTotal?: number;
        Status?: string;
        GlicemiaIdeal?: number;
        CpfIdSexo?: number;
        CpfIdTipoSanguineo?: number;
        CpfNome?: string;
        CpfAltura?: number;
        CpfPeso?: number;
        CpfDataNascimento?: string;
        CpfEmail?: string;
        CpfGlicemiaIdeal?: number;
        IdPeriodoDescricao?: string;
        IdDataIdAno?: number;
        IdDataIdMes?: number;
        IdDataIdDia?: number;
    }

    export namespace HistoricoRow {
        export const idProperty = 'IdHistorico';
        export const nameProperty = 'Cpf';
        export const localTextPrefix = 'Historico.Historico';

        export declare const enum Fields {
            IdHistorico = "IdHistorico",
            Cpf = "Cpf",
            IdPeriodo = "IdPeriodo",
            IdData = "IdData",
            GlicemiaAntes = "GlicemiaAntes",
            GlicemiaDepois = "GlicemiaDepois",
            InsulinaTotal = "InsulinaTotal",
            Status = "Status",
            GlicemiaIdeal = "GlicemiaIdeal",
            CpfIdSexo = "CpfIdSexo",
            CpfIdTipoSanguineo = "CpfIdTipoSanguineo",
            CpfNome = "CpfNome",
            CpfAltura = "CpfAltura",
            CpfPeso = "CpfPeso",
            CpfDataNascimento = "CpfDataNascimento",
            CpfEmail = "CpfEmail",
            CpfGlicemiaIdeal = "CpfGlicemiaIdeal",
            IdPeriodoDescricao = "IdPeriodoDescricao",
            IdDataIdAno = "IdDataIdAno",
            IdDataIdMes = "IdDataIdMes",
            IdDataIdDia = "IdDataIdDia"
        }
    }
}

