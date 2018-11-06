
namespace HBIS.Historico {

    @Serenity.Decorators.registerClass()
    export class HistoricoDialog extends Serenity.EntityDialog<HistoricoRow, any> {
        protected getFormKey() { return HistoricoForm.formKey; }
        protected getIdProperty() { return HistoricoRow.idProperty; }
        protected getLocalTextPrefix() { return HistoricoRow.localTextPrefix; }
        protected getNameProperty() { return HistoricoRow.nameProperty; }
        protected getService() { return HistoricoService.baseUrl; }

        protected form = new HistoricoForm(this.idPrefix);

    }
}