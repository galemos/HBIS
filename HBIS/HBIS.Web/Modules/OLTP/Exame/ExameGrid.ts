﻿
namespace HBIS.OLTP {

    @Serenity.Decorators.registerClass()
    export class ExameGrid extends Serenity.EntityGrid<ExameRow, any> {
        protected getColumnsKey() { return 'OLTP.Exame'; }
        protected getDialogType() { return ExameDialog; }
        protected getIdProperty() { return ExameRow.idProperty; }
        protected getLocalTextPrefix() { return ExameRow.localTextPrefix; }
        protected getService() { return ExameService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}