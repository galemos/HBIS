
namespace HBIS.ADD.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("ADD.Sexo")]
    [BasedOnRow(typeof(Entities.SexoRow), CheckNames = true)]
    public class SexoColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 IdSexo { get; set; }
        [EditLink]
        public String Descricao { get; set; }
    }
}