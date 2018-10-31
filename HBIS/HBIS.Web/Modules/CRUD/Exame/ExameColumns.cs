
namespace HBIS.CRUD.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("CRUD.Exame")]
    [BasedOnRow(typeof(Entities.ExameRow), CheckNames = true)]
    public class ExameColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Guid IdExame { get; set; }
        public String IdPacienteContatoEmergencia { get; set; }
        public String IdExameDescicaoDescricao { get; set; }
        [EditLink]
        public String CrmCpf { get; set; }
        public Decimal Resultado { get; set; }
    }
}