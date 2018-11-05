
namespace HBIS.ADD {

    @Serenity.Decorators.registerClass()
    export class ExameDescicaoGrid extends Serenity.EntityGrid<ExameDescicaoRow, any> {
        protected getColumnsKey() { return 'ADD.ExameDescicao'; }
        protected getDialogType() { return ExameDescicaoDialog; }
        protected getIdProperty() { return ExameDescicaoRow.idProperty; }
        protected getLocalTextPrefix() { return ExameDescicaoRow.localTextPrefix; }
        protected getService() { return ExameDescicaoService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}