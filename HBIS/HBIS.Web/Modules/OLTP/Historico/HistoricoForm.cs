
namespace HBIS.OLTP.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("OLTP.Historico")]
    [BasedOnRow(typeof(Entities.HistoricoRow), CheckNames = true)]
    public class HistoricoForm
    {
        public Guid IdPaciente { get; set; }
        public Decimal Carboidrato { get; set; }
        public DateTime Data { get; set; }
        public Decimal GlicemiaAtual { get; set; }
        public Decimal Insulina { get; set; }
    }
}