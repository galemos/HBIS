namespace HBIS.Paciente {
    export interface PacienteRow {
        Cpf?: string;
        IdSexo?: number;
        IdTipoSanguineo?: number;
        Nome?: string;
        Altura?: number;
        Peso?: number;
        DataNascimento?: string;
        Email?: string;
        GlicemiaIdeal?: number;
        IdSexoDescricao?: string;
        IdTipoSanguineoDescricao?: string;
    }

    export namespace PacienteRow {
        export const idProperty = 'Cpf';
        export const nameProperty = 'Cpf';
        export const localTextPrefix = 'Paciente.Paciente';

        export declare const enum Fields {
            Cpf = "Cpf",
            IdSexo = "IdSexo",
            IdTipoSanguineo = "IdTipoSanguineo",
            Nome = "Nome",
            Altura = "Altura",
            Peso = "Peso",
            DataNascimento = "DataNascimento",
            Email = "Email",
            GlicemiaIdeal = "GlicemiaIdeal",
            IdSexoDescricao = "IdSexoDescricao",
            IdTipoSanguineoDescricao = "IdTipoSanguineoDescricao"
        }
    }
}

