namespace HBIS.Exame {
    export interface ExameForm {
        Cpf: Serenity.StringEditor;
        Crm: Serenity.StringEditor;
        IdData: Serenity.StringEditor;
        IdExameDescricao: Serenity.IntegerEditor;
        Resultado: Serenity.DecimalEditor;
    }

    export class ExameForm extends Serenity.PrefixedContext {
        static formKey = 'Exame.Exame';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!ExameForm.init)  {
                ExameForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.IntegerEditor;
                var w2 = s.DecimalEditor;

                Q.initFormType(ExameForm, [
                    'Cpf', w0,
                    'Crm', w0,
                    'IdData', w0,
                    'IdExameDescricao', w1,
                    'Resultado', w2
                ]);
            }
        }
    }
}

