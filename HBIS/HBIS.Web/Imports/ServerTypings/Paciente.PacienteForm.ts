namespace HBIS.Paciente {
    export interface PacienteForm {
        IdSexo: Serenity.IntegerEditor;
        IdTipoSanguineo: Serenity.IntegerEditor;
        Nome: Serenity.StringEditor;
        Altura: Serenity.DecimalEditor;
        Peso: Serenity.DecimalEditor;
        DataNascimento: Serenity.DateEditor;
        Email: Serenity.StringEditor;
        GlicemiaIdeal: Serenity.DecimalEditor;
    }

    export class PacienteForm extends Serenity.PrefixedContext {
        static formKey = 'Paciente.Paciente';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!PacienteForm.init)  {
                PacienteForm.init = true;

                var s = Serenity;
                var w0 = s.IntegerEditor;
                var w1 = s.StringEditor;
                var w2 = s.DecimalEditor;
                var w3 = s.DateEditor;

                Q.initFormType(PacienteForm, [
                    'IdSexo', w0,
                    'IdTipoSanguineo', w0,
                    'Nome', w1,
                    'Altura', w2,
                    'Peso', w2,
                    'DataNascimento', w3,
                    'Email', w1,
                    'GlicemiaIdeal', w2
                ]);
            }
        }
    }
}

