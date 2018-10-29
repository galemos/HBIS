
namespace HBI.OLTP {
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

        export namespace Fields {
            export declare const IdPaciente;
            export declare const Altura;
            export declare const ContatoEmergencia;
            export declare const DataNascimento;
            export declare const Email;
            export declare const FatorCorrecao;
            export declare const GlicemiaIdeal;
            export declare const InsulinaBasal;
            export declare const InsulinaRapida;
            export declare const Nome;
            export declare const Peso;
            export declare const Sexo;
            export declare const TipoSanguineo;
        }

        [
            'IdPaciente',
            'Altura',
            'ContatoEmergencia',
            'DataNascimento',
            'Email',
            'FatorCorrecao',
            'GlicemiaIdeal',
            'InsulinaBasal',
            'InsulinaRapida',
            'Nome',
            'Peso',
            'Sexo',
            'TipoSanguineo'
        ].forEach(x => (<any>Fields)[x] = x);
    }
}