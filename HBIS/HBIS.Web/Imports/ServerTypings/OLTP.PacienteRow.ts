namespace HBIS.OLTP {
    export interface PacienteRow {
        IdPaciente?: string;
        Altura?: number;
        ContatoEmergencia?: string;
        DataNascimento?: string;
        Email?: string;
        FatorCorrecao?: number;
        GlicemiaIdeal?: number;
        InsulinaBasal?: number;
        InsulinaRapida?: number;
        Nome?: string;
        Peso?: number;
        Sexo?: string;
        TipoSanguineo?: string;
    }

    export namespace PacienteRow {
        export const idProperty = 'IdPaciente';
        export const nameProperty = 'ContatoEmergencia';
        export const localTextPrefix = 'OLTP.Paciente';

        export declare const enum Fields {
            IdPaciente = "IdPaciente",
            Altura = "Altura",
            ContatoEmergencia = "ContatoEmergencia",
            DataNascimento = "DataNascimento",
            Email = "Email",
            FatorCorrecao = "FatorCorrecao",
            GlicemiaIdeal = "GlicemiaIdeal",
            InsulinaBasal = "InsulinaBasal",
            InsulinaRapida = "InsulinaRapida",
            Nome = "Nome",
            Peso = "Peso",
            Sexo = "Sexo",
            TipoSanguineo = "TipoSanguineo"
        }
    }
}

