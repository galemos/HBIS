
namespace HBIS.Paciente {

    @Serenity.Decorators.registerClass()
    export class PacienteDialog extends Serenity.EntityDialog<PacienteRow, any> {
        protected getFormKey() { return PacienteForm.formKey; }
        protected getIdProperty() { return PacienteRow.idProperty; }
        protected getLocalTextPrefix() { return PacienteRow.localTextPrefix; }
        protected getNameProperty() { return PacienteRow.nameProperty; }
        protected getService() { return PacienteService.baseUrl; }

        protected form = new PacienteForm(this.idPrefix);

    }
}