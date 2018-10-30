namespace HBIS.OLTP {
    export interface HistoricoForm {
        IdPaciente: Serenity.StringEditor;
        Carboidrato: Serenity.DecimalEditor;
        Data: Serenity.DateEditor;
        GlicemiaAtual: Serenity.DecimalEditor;
        Insulina: Serenity.DecimalEditor;
    }

    export class HistoricoForm extends Serenity.PrefixedContext {
        static formKey = 'OLTP.Historico';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!HistoricoForm.init)  {
                HistoricoForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.DecimalEditor;
                var w2 = s.DateEditor;

                Q.initFormType(HistoricoForm, [
                    'IdPaciente', w0,
                    'Carboidrato', w1,
                    'Data', w2,
                    'GlicemiaAtual', w1,
                    'Insulina', w1
                ]);
            }
        }
    }
}

