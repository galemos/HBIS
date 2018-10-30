namespace HBIS.OLTP {
    export interface MedicoForm {
        Cpf: Serenity.StringEditor;
        Nome: Serenity.StringEditor;
        Email: Serenity.StringEditor;
    }

    export class MedicoForm extends Serenity.PrefixedContext {
        static formKey = 'OLTP.Medico';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!MedicoForm.init)  {
                MedicoForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;

                Q.initFormType(MedicoForm, [
                    'Cpf', w0,
                    'Nome', w0,
                    'Email', w0
                ]);
            }
        }
    }
}

