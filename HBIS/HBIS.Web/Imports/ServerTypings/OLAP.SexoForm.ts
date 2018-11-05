
namespace HBIS.OLAP {
    export class SexoForm extends Serenity.PrefixedContext {
        static formKey = 'OLAP.Sexo';
    }

    export interface SexoForm {
        Descricao: Serenity.StringEditor;
    }

    [,
        ['Descricao', () => Serenity.StringEditor]
    ].forEach(x => Object.defineProperty(SexoForm.prototype, <string>x[0], {
        get: function () {
            return this.w(x[0], (x[1] as any)());
        },
        enumerable: true,
        configurable: true
    }));
}