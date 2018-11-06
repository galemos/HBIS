namespace HBIS.Exame {
    export interface ExameRow {
        IdExame?: number;
        Cpf?: string;
        Crm?: string;
        IdData?: string;
        IdExameDescricao?: number;
        Resultado?: number;
        CpfIdSexo?: number;
        CpfIdTipoSanguineo?: number;
        CpfNome?: string;
        CpfAltura?: number;
        CpfPeso?: number;
        CpfDataNascimento?: string;
        CpfEmail?: string;
        CpfGlicemiaIdeal?: number;
        CrmNome?: string;
        CrmEmail?: string;
        IdDataIdAno?: number;
        IdDataIdMes?: number;
        IdDataIdDia?: number;
        IdExameDescricaoDescricao?: string;
        IdExameDescricaoValorMinimo?: number;
        IdExameDescricaoValorMaximo?: number;
        IdExameDescricaoUnidade?: string;
    }

    export namespace ExameRow {
        export const idProperty = 'IdExame';
        export const nameProperty = 'Cpf';
        export const localTextPrefix = 'Exame.Exame';

        export declare const enum Fields {
            IdExame = "IdExame",
            Cpf = "Cpf",
            Crm = "Crm",
            IdData = "IdData",
            IdExameDescricao = "IdExameDescricao",
            Resultado = "Resultado",
            CpfIdSexo = "CpfIdSexo",
            CpfIdTipoSanguineo = "CpfIdTipoSanguineo",
            CpfNome = "CpfNome",
            CpfAltura = "CpfAltura",
            CpfPeso = "CpfPeso",
            CpfDataNascimento = "CpfDataNascimento",
            CpfEmail = "CpfEmail",
            CpfGlicemiaIdeal = "CpfGlicemiaIdeal",
            CrmNome = "CrmNome",
            CrmEmail = "CrmEmail",
            IdDataIdAno = "IdDataIdAno",
            IdDataIdMes = "IdDataIdMes",
            IdDataIdDia = "IdDataIdDia",
            IdExameDescricaoDescricao = "IdExameDescricaoDescricao",
            IdExameDescricaoValorMinimo = "IdExameDescricaoValorMinimo",
            IdExameDescricaoValorMaximo = "IdExameDescricaoValorMaximo",
            IdExameDescricaoUnidade = "IdExameDescricaoUnidade"
        }
    }
}

