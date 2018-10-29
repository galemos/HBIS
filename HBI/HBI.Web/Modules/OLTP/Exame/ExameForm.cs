
namespace HBI.OLTP.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("OLTP.Exame")]
    [BasedOnRow(typeof(Entities.ExameRow), CheckNames = true)]
    public class ExameForm
    {
        public Guid IdPaciente { get; set; }
        public String Crm { get; set; }
        public String TituloExame { get; set; }
        public Decimal Resultado { get; set; }
    }
}