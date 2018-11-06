
namespace HBIS.Exame.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Exame.Exame")]
    [BasedOnRow(typeof(Entities.ExameRow), CheckNames = true)]
    public class ExameColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 IdExame { get; set; }
        [EditLink, DisplayName("Nome Paciente")]
        public String CpfNome { get; set; }
        [DisplayName("Nome Médico")]
        public String CrmNome { get; set; }
        [DisplayName("Data"), DisplayFormat("dd/MM/yyyy")]
        public String IdData { get; set; }
        [DisplayName("Exame")]
        public String IdExameDescricaoDescricao { get; set; }
        public Decimal Resultado { get; set; }
    }
}