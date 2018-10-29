
namespace HBI.OLTP {

    @Serenity.Decorators.registerClass()
    export class MedicoGrid extends Serenity.EntityGrid<MedicoRow, any> {
        protected getColumnsKey() { return 'OLTP.Medico'; }
        protected getDialogType() { return MedicoDialog; }
        protected getIdProperty() { return MedicoRow.idProperty; }
        protected getLocalTextPrefix() { return MedicoRow.localTextPrefix; }
        protected getService() { return MedicoService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}