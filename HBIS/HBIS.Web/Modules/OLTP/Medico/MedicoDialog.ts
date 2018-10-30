
namespace HBIS.OLTP {

    @Serenity.Decorators.registerClass()
    export class MedicoDialog extends Serenity.EntityDialog<MedicoRow, any> {
        protected getFormKey() { return MedicoForm.formKey; }
        protected getIdProperty() { return MedicoRow.idProperty; }
        protected getLocalTextPrefix() { return MedicoRow.localTextPrefix; }
        protected getNameProperty() { return MedicoRow.nameProperty; }
        protected getService() { return MedicoService.baseUrl; }

        protected form = new MedicoForm(this.idPrefix);

    }
}