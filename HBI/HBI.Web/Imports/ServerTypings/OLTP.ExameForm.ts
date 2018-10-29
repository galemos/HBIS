
namespace HBI.OLTP {
    export class ExameForm extends Serenity.PrefixedContext {
        static formKey = 'OLTP.Exame';
    }

    export interface ExameForm {
        IdPaciente: Serenity.StringEditor;
        Crm: Serenity.StringEditor;
        TituloExame: Serenity.StringEditor;
        Resultado: Serenity.DecimalEditor;
    }

    [,
        ['IdPaciente', () => Serenity.StringEditor],
        ['Crm', () => Serenity.StringEditor],
        ['TituloExame', () => Serenity.StringEditor],
        ['Resultado', () => Serenity.DecimalEditor]
    ].forEach(x => Object.defineProperty(ExameForm.prototype, <string>x[0], {
        get: function () {
            return this.w(x[0], (x[1] as any)());
        },
        enumerable: true,
        configurable: true
    }));
}