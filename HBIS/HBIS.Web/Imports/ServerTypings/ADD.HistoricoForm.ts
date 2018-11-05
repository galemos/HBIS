
namespace HBIS.ADD {
    export class HistoricoForm extends Serenity.PrefixedContext {
        static formKey = 'ADD.Historico';
    }

    export interface HistoricoForm {
        IdPaciente: Serenity.IntegerEditor;
        Carboidrato: Serenity.DecimalEditor;
        Data: Serenity.DateEditor;
        GlicemiaAtual: Serenity.DecimalEditor;
        Insulina: Serenity.DecimalEditor;
    }

    [,
        ['IdPaciente', () => Serenity.IntegerEditor],
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