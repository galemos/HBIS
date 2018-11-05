
namespace HBIS.OLAP {
    export class PacienteForm extends Serenity.PrefixedContext {
        static formKey = 'OLAP.Paciente';
    }

    export interface PacienteForm {
        IdPaciente: Serenity.IntegerEditor;
        IdSexo: Serenity.IntegerEditor;
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
    }

    [
        ['IdPaciente', () => Serenity.IntegerEditor],
        ['IdSexo', () => Serenity.IntegerEditor],
        ['Altura', () => Serenity.DecimalEditor],
        ['ContatoEmergencia', () => Serenity.StringEditor],
        ['DataNascimento', () => Serenity.DateEditor],
        ['Email', () => Serenity.StringEditor],
        ['FatorCorrecao', () => Serenity.DecimalEditor],
        ['GlicemiaIdeal', () => Serenity.DecimalEditor],
        ['InsulinaBasal', () => Serenity.DecimalEditor],
        ['InsulinaRapida', () => Serenity.DecimalEditor],
        ['Nome', () => Serenity.StringEditor],
        ['Peso', () => Serenity.DecimalEditor]
    ].forEach(x => Object.defineProperty(PacienteForm.prototype, <string>x[0], {
        get: function () {
            return this.w(x[0], (x[1] as any)());
        },
        enumerable: true,
        configurable: true
    }));
}