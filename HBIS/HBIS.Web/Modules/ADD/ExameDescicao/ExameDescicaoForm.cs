
namespace HBIS.ADD.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("ADD.ExameDescicao")]
    [BasedOnRow(typeof(Entities.ExameDescicaoRow), CheckNames = true)]
    public class ExameDescicaoForm
    {
        public String Descricao { get; set; }
    }
}