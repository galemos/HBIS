
namespace HBIS.Historico.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Historico.Historico")]
    [BasedOnRow(typeof(Entities.HistoricoRow), CheckNames = true)]
    public class HistoricoColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 IdHistorico { get; set; }
        [EditLink, DisplayName("Nome Paciente")]
        public String CpfNome { get; set; }
        [DisplayName("Período Aferição")]
        public String IdPeriodoDescricao { get; set; }
        [DisplayName("Data")]
        public String IdData { get; set; }
        public Decimal GlicemiaAntes { get; set; }
        public Decimal GlicemiaDepois { get; set; }
        public Decimal InsulinaTotal { get; set; }
        public String Status { get; set; }
        public Decimal GlicemiaIdeal { get; set; }
    }
}