
namespace HBIS.ADD.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("ADD.Exame")]
    [BasedOnRow(typeof(Entities.ExameRow), CheckNames = true)]
    public class ExameColumns
    {
        //[EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        [EditLink, DisplayName("Exame"), AlignRight]
        public Int32 IdExame { get; set; }
        [EditLink]
        [DisplayName("Médico Solicitante")]
        public String CrmCpf { get; set; }
        [DisplayName("Resultado")]
        public Decimal Resultado { get; set; }
    }
}