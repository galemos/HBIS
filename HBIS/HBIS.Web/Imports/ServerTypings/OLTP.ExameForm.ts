namespace HBIS.OLTP {
    export interface ExameForm {
        IdPaciente: Serenity.StringEditor;
        Crm: Serenity.StringEditor;
        TituloExame: Serenity.StringEditor;
        Resultado: Serenity.DecimalEditor;
    }

    export class ExameForm extends Serenity.PrefixedContext {
        static formKey = 'OLTP.Exame';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!ExameForm.init)  {
                ExameForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.DecimalEditor;

                Q.initFormType(ExameForm, [
                    'IdPaciente', w0,
                    'Crm', w0,
                    'TituloExame', w0,
                    'Resultado', w1
                ]);
            }
        }
    }
}

