
namespace HBIS.CRUD {
    export interface PacienteRow {
        IdPaciente?: string;
        IdSexo?: string;
        IdTipoSanguineo?: string;
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
        IdSexoDescricao?: string;
        IdTipoSanguineoDescricao?: string;
    }

    export namespace PacienteRow {
        export const idProperty = 'IdPaciente';
        export const nameProperty = 'ContatoEmergencia';
        export const localTextPrefix = 'CRUD.Paciente';

        export namespace Fields {
            export declare const IdPaciente;
            export declare const IdSexo;
            export declare const IdTipoSanguineo;
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
            export declare const IdSexoDescricao;
            export declare const IdTipoSanguineoDescricao;
        }

        [
            'IdPaciente',
            'IdSexo',
            'IdTipoSanguineo',
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
            'IdSexoDescricao',
            'IdTipoSanguineoDescricao'
        ].forEach(x => (<any>Fields)[x] = x);
    }
}