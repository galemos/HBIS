
namespace HBIS.ADD.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("ADD.Historico")]
    [BasedOnRow(typeof(Entities.HistoricoRow), CheckNames = true)]
    public class HistoricoForm
    {
        public Int32 IdPaciente { get; set; }
        public Decimal Carboidrato { get; set; }
        public DateTime Data { get; set; }
        public Decimal GlicemiaAtual { get; set; }
        public Decimal Insulina { get; set; }
    }
}