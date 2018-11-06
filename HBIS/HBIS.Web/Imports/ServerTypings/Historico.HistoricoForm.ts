namespace HBIS.Historico {
    export interface HistoricoForm {
        Cpf: Serenity.StringEditor;
        IdPeriodo: Serenity.IntegerEditor;
        IdData: Serenity.StringEditor;
        GlicemiaAntes: Serenity.DecimalEditor;
        GlicemiaDepois: Serenity.DecimalEditor;
        InsulinaTotal: Serenity.DecimalEditor;
        Status: Serenity.StringEditor;
        GlicemiaIdeal: Serenity.DecimalEditor;
    }

    export class HistoricoForm extends Serenity.PrefixedContext {
        static formKey = 'Historico.Historico';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!HistoricoForm.init)  {
                HistoricoForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.IntegerEditor;
                var w2 = s.DecimalEditor;

                Q.initFormType(HistoricoForm, [
                    'Cpf', w0,
                    'IdPeriodo', w1,
                    'IdData', w0,
                    'GlicemiaAntes', w2,
                    'GlicemiaDepois', w2,
                    'InsulinaTotal', w2,
                    'Status', w0,
                    'GlicemiaIdeal', w2
                ]);
            }
        }
    }
}

