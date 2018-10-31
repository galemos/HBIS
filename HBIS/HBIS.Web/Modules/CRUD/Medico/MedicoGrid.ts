
namespace HBIS.CRUD {

    @Serenity.Decorators.registerClass()
    export class MedicoGrid extends Serenity.EntityGrid<MedicoRow, any> {
        protected getColumnsKey() { return 'CRUD.Medico'; }
        protected getDialogType() { return MedicoDialog; }
        protected getIdProperty() { return MedicoRow.idProperty; }
        protected getLocalTextPrefix() { return MedicoRow.localTextPrefix; }
        protected getService() { return MedicoService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}