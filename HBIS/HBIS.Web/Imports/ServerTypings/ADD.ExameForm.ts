
namespace HBIS.ADD {
    export class ExameForm extends Serenity.PrefixedContext {
        static formKey = 'ADD.Exame';
    }

    export interface ExameForm {
        IdPaciente: Serenity.IntegerEditor;
        Crm: Serenity.StringEditor;
        IdExameDescricao: Serenity.IntegerEditor;
        Resultado: Serenity.DecimalEditor;
    }

    [,
        ['IdPaciente', () => Serenity.IntegerEditor],
        ['Crm', () => Serenity.StringEditor],
        ['IdExameDescricao', () => Serenity.IntegerEditor],
        ['Resultado', () => Serenity.DecimalEditor]
    ].forEach(x => Object.defineProperty(ExameForm.prototype, <string>x[0], {
        get: function () {
            return this.w(x[0], (x[1] as any)());
        },
        enumerable: true,
        configurable: true
    }));
}