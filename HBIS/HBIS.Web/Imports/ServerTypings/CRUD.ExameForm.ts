
namespace HBIS.CRUD {
    export class ExameForm extends Serenity.PrefixedContext {
        static formKey = 'CRUD.Exame';
    }

    export interface ExameForm {
        IdPaciente: Serenity.StringEditor;
        IdExameDescicao: Serenity.StringEditor;
        Crm: Serenity.StringEditor;
        Resultado: Serenity.DecimalEditor;
    }

    [,
        ['IdPaciente', () => Serenity.StringEditor],
        ['IdExameDescicao', () => Serenity.StringEditor],
        ['Crm', () => Serenity.StringEditor],
        ['Resultado', () => Serenity.DecimalEditor]
    ].forEach(x => Object.defineProperty(ExameForm.prototype, <string>x[0], {
        get: function () {
            return this.w(x[0], (x[1] as any)());
        },
        enumerable: true,
        configurable: true
    }));
}