
namespace HBIS.OLTP.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("OLTP.Historico")]
    [BasedOnRow(typeof(Entities.HistoricoRow), CheckNames = true)]
    public class HistoricoColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Guid IdHistorico { get; set; }
        public Guid IdPaciente { get; set; }
        public Decimal Carboidrato { get; set; }
        public DateTime Data { get; set; }
        public Decimal GlicemiaAtual { get; set; }
        public Decimal Insulina { get; set; }
    }
}