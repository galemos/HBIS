
namespace HBIS.Historico.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Historico.Historico")]
    [BasedOnRow(typeof(Entities.HistoricoRow), CheckNames = true)]
    public class HistoricoForm
    {
        public String Cpf { get; set; }
        public Int32 IdPeriodo { get; set; }
        public String IdData { get; set; }
        public Decimal GlicemiaAntes { get; set; }
        public Decimal GlicemiaDepois { get; set; }
        public Decimal InsulinaTotal { get; set; }
        public String Status { get; set; }
        public Decimal GlicemiaIdeal { get; set; }
    }
}