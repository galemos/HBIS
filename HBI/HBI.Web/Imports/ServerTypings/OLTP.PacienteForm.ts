
namespace HBI.OLTP {
    export class PacienteForm extends Serenity.PrefixedContext {
        static formKey = 'OLTP.Paciente';
    }

    export interface PacienteForm {
        Altura: Serenity.DecimalEditor;
        ContatoEmergencia: Serenity.StringEditor;
        DataNascimento: Serenity.DateEditor;
        Email: Serenity.StringEditor;
        FatorCorrecao: Serenity.DecimalEditor;
        GlicemiaIdeal: Serenity.DecimalEditor;
        InsulinaBasal: Serenity.DecimalEditor;
        InsulinaRapida: Serenity.DecimalEditor;
        Nome: Serenity.StringEditor;
        Peso: Serenity.DecimalEditor;
        Sexo: Serenity.StringEditor;
        TipoSanguineo: Serenity.StringEditor;
    }

    [,
        ['Altura', () => Serenity.DecimalEditor],
        ['ContatoEmergencia', () => Serenity.StringEditor],
        ['DataNascimento', () => Serenity.DateEditor],
        ['Email', () => Serenity.StringEditor],
        ['FatorCorrecao', () => Serenity.DecimalEditor],
        ['GlicemiaIdeal', () => Serenity.DecimalEditor],
        ['InsulinaBasal', () => Serenity.DecimalEditor],
        ['InsulinaRapida', () => Serenity.DecimalEditor],
        ['Nome', () => Serenity.StringEditor],
        ['Peso', () => Serenity.DecimalEditor],
        ['Sexo', () => Serenity.StringEditor],
        ['TipoSanguineo', () => Serenity.StringEditor]
    ].forEach(x => Object.defineProperty(PacienteForm.prototype, <string>x[0], {
        get: function () {
            return this.w(x[0], (x[1] as any)());
        },
        enumerable: true,
        configurable: true
    }));
}