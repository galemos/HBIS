
namespace HBI.OLTP {
    export class MedicoForm extends Serenity.PrefixedContext {
        static formKey = 'OLTP.Medico';
    }

    export interface MedicoForm {
        Cpf: Serenity.StringEditor;
        Nome: Serenity.StringEditor;
        Email: Serenity.StringEditor;
    }

    [,
        ['Cpf', () => Serenity.StringEditor],
        ['Nome', () => Serenity.StringEditor],
        ['Email', () => Serenity.StringEditor]
    ].forEach(x => Object.defineProperty(MedicoForm.prototype, <string>x[0], {
        get: function () {
            return this.w(x[0], (x[1] as any)());
        },
        enumerable: true,
        configurable: true
    }));
}