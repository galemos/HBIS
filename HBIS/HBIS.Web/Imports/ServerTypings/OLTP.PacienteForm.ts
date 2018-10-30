namespace HBIS.OLTP {
    export interface PacienteForm {
        Altura: Serenity.DecimalEditor;
        ContatoEmergencia: Serenity.StringEditor;
        DataNascimento: Serenity.DateEditor;
        Email: Serenity.StringEditor;
        FatorCorrecao: Serenity.DecimalEditor;
        GlicemiaIdeal: Serenity.DecimalEditor;
        InsulinaBasal: Serenity.DecimalEditor;
        InsulinaRapida: Serenity.DecimalEditor;
        Nome: Serenity.StringEditor;
        Peso: Serenity.DecimalEditor;
        Sexo: Serenity.StringEditor;
        TipoSanguineo: Serenity.StringEditor;
    }

    export class PacienteForm extends Serenity.PrefixedContext {
        static formKey = 'OLTP.Paciente';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!PacienteForm.init)  {
                PacienteForm.init = true;

                var s = Serenity;
                var w0 = s.DecimalEditor;
                var w1 = s.StringEditor;
                var w2 = s.DateEditor;

                Q.initFormType(PacienteForm, [
                    'Altura', w0,
                    'ContatoEmergencia', w1,
                    'DataNascimento', w2,
                    'Email', w1,
                    'FatorCorrecao', w0,
                    'GlicemiaIdeal', w0,
                    'InsulinaBasal', w0,
                    'InsulinaRapida', w0,
                    'Nome', w1,
                    'Peso', w0,
                    'Sexo', w1,
                    'TipoSanguineo', w1
                ]);
            }
        }
    }
}

