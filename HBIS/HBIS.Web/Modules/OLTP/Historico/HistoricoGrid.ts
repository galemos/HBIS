
namespace HBIS.OLTP {

    @Serenity.Decorators.registerClass()
    export class HistoricoGrid extends Serenity.EntityGrid<HistoricoRow, any> {
        protected getColumnsKey() { return 'OLTP.Historico'; }
        protected getDialogType() { return HistoricoDialog; }
        protected getIdProperty() { return HistoricoRow.idProperty; }
        protected getLocalTextPrefix() { return HistoricoRow.localTextPrefix; }
        protected getService() { return HistoricoService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}