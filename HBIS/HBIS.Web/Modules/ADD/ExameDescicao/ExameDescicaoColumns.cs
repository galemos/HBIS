
namespace HBIS.ADD.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("ADD.ExameDescicao")]
    [BasedOnRow(typeof(Entities.ExameDescicaoRow), CheckNames = true)]
    public class ExameDescicaoColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 IdExameDescricao { get; set; }
        [EditLink]
        public String Descricao { get; set; }
    }
}