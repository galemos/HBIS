
namespace HBIS.CRUD {
    export class HistoricoForm extends Serenity.PrefixedContext {
        static formKey = 'CRUD.Historico';
    }

    export interface HistoricoForm {
        IdPaciente: Serenity.StringEditor;
        Carboidrato: Serenity.DecimalEditor;
        Data: Serenity.DateEditor;
        GlicemiaAtual: Serenity.DecimalEditor;
        Insulina: Serenity.DecimalEditor;
    }

    [,
        ['IdPaciente', () => Serenity.StringEditor],
        ['Carboidrato', () => Serenity.DecimalEditor],
        ['Data', () => Serenity.DateEditor],
        ['GlicemiaAtual', () => Serenity.DecimalEditor],
        ['Insulina', () => Serenity.DecimalEditor]
    ].forEach(x => Object.defineProperty(HistoricoForm.prototype, <string>x[0], {
        get: function () {
            return this.w(x[0], (x[1] as any)());
        },
        enumerable: true,
        configurable: true
    }));
}