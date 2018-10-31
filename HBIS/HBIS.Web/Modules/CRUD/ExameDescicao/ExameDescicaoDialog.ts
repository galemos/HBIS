
namespace HBIS.CRUD {

    @Serenity.Decorators.registerClass()
    export class ExameDescicaoDialog extends Serenity.EntityDialog<ExameDescicaoRow, any> {
        protected getFormKey() { return ExameDescicaoForm.formKey; }
        protected getIdProperty() { return ExameDescicaoRow.idProperty; }
        protected getLocalTextPrefix() { return ExameDescicaoRow.localTextPrefix; }
        protected getNameProperty() { return ExameDescicaoRow.nameProperty; }
        protected getService() { return ExameDescicaoService.baseUrl; }

        protected form = new ExameDescicaoForm(this.idPrefix);

    }
}