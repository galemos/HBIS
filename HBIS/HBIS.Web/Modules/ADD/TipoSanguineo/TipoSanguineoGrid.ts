
namespace HBIS.ADD {

    @Serenity.Decorators.registerClass()
    export class TipoSanguineoGrid extends Serenity.EntityGrid<TipoSanguineoRow, any> {
        protected getColumnsKey() { return 'ADD.TipoSanguineo'; }
        protected getDialogType() { return TipoSanguineoDialog; }
        protected getIdProperty() { return TipoSanguineoRow.idProperty; }
        protected getLocalTextPrefix() { return TipoSanguineoRow.localTextPrefix; }
        protected getService() { return TipoSanguineoService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}