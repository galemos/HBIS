
namespace HBIS.CRUD {
    export interface ExameRow {
        IdExame?: string;
        IdPaciente?: string;
        IdExameDescicao?: string;
        Crm?: string;
        Resultado?: number;
        IdPacienteIdSexo?: string;
        IdPacienteIdTipoSanguineo?: string;
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
        IdExameDescicaoDescricao?: string;
        CrmCpf?: string;
        CrmNome?: string;
        CrmEmail?: string;
    }

    export namespace ExameRow {
        export const idProperty = 'IdExame';
        export const nameProperty = 'Crm';
        export const localTextPrefix = 'CRUD.Exame';

        export namespace Fields {
            export declare const IdExame;
            export declare const IdPaciente;
            export declare const IdExameDescicao;
            export declare const Crm;
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
            export declare const IdExameDescicaoDescricao;
            export declare const CrmCpf;
            export declare const CrmNome;
            export declare const CrmEmail;
        }

        [
            'IdExame',
            'IdPaciente',
            'IdExameDescicao',
            'Crm',
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
            'IdExameDescicaoDescricao',
            'CrmCpf',
            'CrmNome',
            'CrmEmail'
        ].forEach(x => (<any>Fields)[x] = x);
    }
}