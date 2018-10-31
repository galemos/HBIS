
namespace HBIS.OLTP {
    export class TipoSanguineoForm extends Serenity.PrefixedContext {
        static formKey = 'OLTP.TipoSanguineo';
    }

    export interface TipoSanguineoForm {
        Descricao: Serenity.StringEditor;
    }

    [,
        ['Descricao', () => Serenity.StringEditor]
    ].forEach(x => Object.defineProperty(TipoSanguineoForm.prototype, <string>x[0], {
        get: function () {
            return this.w(x[0], (x[1] as any)());
        },
        enumerable: true,
        configurable: true
    }));
}