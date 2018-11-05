
namespace HBIS.ADD.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("ADD.Sexo")]
    [BasedOnRow(typeof(Entities.SexoRow), CheckNames = true)]
    public class SexoForm
    {
        public String Descricao { get; set; }
    }
}