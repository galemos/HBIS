
namespace HBIS.ADD {
    export interface ExameRow {
        IdExame?: number;
        IdPaciente?: number;
        Crm?: string;
        IdExameDescricao?: number;
        Resultado?: number;
        IdPacienteIdSexo?: number;
        IdPacienteIdTipoSanguineo?: number;
        IdPacienteAltura?: number;
        IdPacienteContatoEmergencia?: string;
        IdPacienteDataNascimento?: string;
        IdPacienteEmail?: string;
        IdPacienteFatorCorrecao?: number;
        IdPacienteGlicemiaIdeal?: number;
        IdPacienteInsulinaBasal?: number;
        IdPacienteInsulinaRapida?: number;
        IdPacienteNome?: string;
        IdPacientePeso?: number;
        CrmCpf?: string;
        CrmNome?: string;
        CrmEmail?: string;
        IdExameDescricaoDescricao?: string;
    }

    export namespace ExameRow {
        export const idProperty = 'IdExame';
        export const nameProperty = 'Crm';
        export const localTextPrefix = 'ADD.Exame';

        export namespace Fields {
            export declare const IdExame;
            export declare const IdPaciente;
            export declare const Crm;
            export declare const IdExameDescricao;
            export declare const Resultado;
            export declare const IdPacienteIdSexo;
            export declare const IdPacienteIdTipoSanguineo;
            export declare const IdPacienteAltura;
            export declare const IdPacienteContatoEmergencia;
            export declare const IdPacienteDataNascimento;
            export declare const IdPacienteEmail;
            export declare const IdPacienteFatorCorrecao;
            export declare const IdPacienteGlicemiaIdeal;
            export declare const IdPacienteInsulinaBasal;
            export declare const IdPacienteInsulinaRapida;
            export declare const IdPacienteNome;
            export declare const IdPacientePeso;
            export declare const CrmCpf;
            export declare const CrmNome;
            export declare const CrmEmail;
            export declare const IdExameDescricaoDescricao;
        }

        [
            'IdExame',
            'IdPaciente',
            'Crm',
            'IdExameDescricao',
            'Resultado',
            'IdPacienteIdSexo',
            'IdPacienteIdTipoSanguineo',
            'IdPacienteAltura',
            'IdPacienteContatoEmergencia',
            'IdPacienteDataNascimento',
            'IdPacienteEmail',
            'IdPacienteFatorCorrecao',
            'IdPacienteGlicemiaIdeal',
            'IdPacienteInsulinaBasal',
            'IdPacienteInsulinaRapida',
            'IdPacienteNome',
            'IdPacientePeso',
            'CrmCpf',
            'CrmNome',
            'CrmEmail',
            'IdExameDescricaoDescricao'
        ].forEach(x => (<any>Fields)[x] = x);
    }
}