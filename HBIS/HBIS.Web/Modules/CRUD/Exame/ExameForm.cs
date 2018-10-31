
namespace HBIS.CRUD.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("CRUD.Exame")]
    [BasedOnRow(typeof(Entities.ExameRow), CheckNames = true)]
    public class ExameForm
    {
        public Guid IdPaciente { get; set; }
        public Guid IdExameDescicao { get; set; }
        public String Crm { get; set; }
        public Decimal Resultado { get; set; }
    }
}