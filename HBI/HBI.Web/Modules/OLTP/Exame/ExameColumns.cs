
namespace HBI.OLTP.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("OLTP.Exame")]
    [BasedOnRow(typeof(Entities.ExameRow), CheckNames = true)]
    public class ExameColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Guid IdExame { get; set; }
        public Guid IdPaciente { get; set; }
        [EditLink]
        public String Crm { get; set; }
        public String TituloExame { get; set; }
        public Decimal Resultado { get; set; }
    }
}