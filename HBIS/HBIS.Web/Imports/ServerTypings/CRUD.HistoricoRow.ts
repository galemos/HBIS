
namespace HBIS.CRUD {
    export interface HistoricoRow {
        IdHistorico?: string;
        IdPaciente?: string;
        Carboidrato?: number;
        Data?: string;
        GlicemiaAtual?: number;
        Insulina?: number;
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
    }

    export namespace HistoricoRow {
        export const idProperty = 'IdHistorico';
        export const localTextPrefix = 'CRUD.Historico';

        export namespace Fields {
            export declare const IdHistorico;
            export declare const IdPaciente;
            export declare const Carboidrato;
            export declare const Data;
            export declare const GlicemiaAtual;
            export declare const Insulina;
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
        }

        [
            'IdHistorico',
            'IdPaciente',
            'Carboidrato',
            'Data',
            'GlicemiaAtual',
            'Insulina',
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
            'IdPacientePeso'
        ].forEach(x => (<any>Fields)[x] = x);
    }
}