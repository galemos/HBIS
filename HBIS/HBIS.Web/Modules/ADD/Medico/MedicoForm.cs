
namespace HBIS.ADD.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("ADD.Medico")]
    [BasedOnRow(typeof(Entities.MedicoRow), CheckNames = true)]
    public class MedicoForm
    {
        public String Crm { get; set; }
        public String Cpf { get; set; }
        public String Nome { get; set; }
        public String Email { get; set; }
    }
}