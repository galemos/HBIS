
namespace HBIS.Exame.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Exame.Exame")]
    [BasedOnRow(typeof(Entities.ExameRow), CheckNames = true)]
    public class ExameForm
    {
        public String Cpf { get; set; }
        public String Crm { get; set; }
        public String IdData { get; set; }
        public Int32 IdExameDescricao { get; set; }
        public Decimal Resultado { get; set; }
    }
}