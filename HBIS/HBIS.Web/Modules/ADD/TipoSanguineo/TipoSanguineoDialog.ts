
namespace HBIS.ADD {

    @Serenity.Decorators.registerClass()
    export class TipoSanguineoDialog extends Serenity.EntityDialog<TipoSanguineoRow, any> {
        protected getFormKey() { return TipoSanguineoForm.formKey; }
        protected getIdProperty() { return TipoSanguineoRow.idProperty; }
        protected getLocalTextPrefix() { return TipoSanguineoRow.localTextPrefix; }
        protected getNameProperty() { return TipoSanguineoRow.nameProperty; }
        protected getService() { return TipoSanguineoService.baseUrl; }

        protected form = new TipoSanguineoForm(this.idPrefix);

    }
}