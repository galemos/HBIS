
namespace HBIS.ADD.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("ADD.TipoSanguineo")]
    [BasedOnRow(typeof(Entities.TipoSanguineoRow), CheckNames = true)]
    public class TipoSanguineoForm
    {
        public String Descricao { get; set; }
    }
}