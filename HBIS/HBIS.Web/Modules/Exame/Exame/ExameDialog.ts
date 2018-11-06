
namespace HBIS.Exame {

    @Serenity.Decorators.registerClass()
    export class ExameDialog extends Serenity.EntityDialog<ExameRow, any> {
        protected getFormKey() { return ExameForm.formKey; }
        protected getIdProperty() { return ExameRow.idProperty; }
        protected getLocalTextPrefix() { return ExameRow.localTextPrefix; }
        protected getNameProperty() { return ExameRow.nameProperty; }
        protected getService() { return ExameService.baseUrl; }

        protected form = new ExameForm(this.idPrefix);

    }
}