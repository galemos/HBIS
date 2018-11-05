
namespace HBIS.ADD.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("ADD.TipoSanguineo")]
    [BasedOnRow(typeof(Entities.TipoSanguineoRow), CheckNames = true)]
    public class TipoSanguineoColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 IdTipoSanguineo { get; set; }
        [EditLink]
        public String Descricao { get; set; }
    }
}