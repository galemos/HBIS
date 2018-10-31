
namespace HBIS.OLTP {
    export class ExameDescicaoForm extends Serenity.PrefixedContext {
        static formKey = 'OLTP.ExameDescicao';
    }

    export interface ExameDescicaoForm {
        Descricao: Serenity.StringEditor;
    }

    [,
        ['Descricao', () => Serenity.StringEditor]
    ].forEach(x => Object.defineProperty(ExameDescicaoForm.prototype, <string>x[0], {
        get: function () {
            return this.w(x[0], (x[1] as any)());
        },
        enumerable: true,
        configurable: true
    }));
}