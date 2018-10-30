
namespace HBIS.OLTP.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("OLTP.Medico")]
    [BasedOnRow(typeof(Entities.MedicoRow), CheckNames = true)]
    public class MedicoForm
    {
        public String Cpf { get; set; }
        public String Nome { get; set; }
        public String Email { get; set; }
    }
}