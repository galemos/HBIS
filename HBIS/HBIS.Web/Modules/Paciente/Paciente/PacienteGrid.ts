﻿
namespace HBIS.Paciente {

    @Serenity.Decorators.registerClass()
    export class PacienteGrid extends Serenity.EntityGrid<PacienteRow, any> {
        protected getColumnsKey() { return 'Paciente.Paciente'; }
        protected getDialogType() { return PacienteDialog; }
        protected getIdProperty() { return PacienteRow.idProperty; }
        protected getLocalTextPrefix() { return PacienteRow.localTextPrefix; }
        protected getService() { return PacienteService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}