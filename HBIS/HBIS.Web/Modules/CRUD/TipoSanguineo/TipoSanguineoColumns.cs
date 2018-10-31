
namespace HBIS.CRUD.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("CRUD.TipoSanguineo")]
    [BasedOnRow(typeof(Entities.TipoSanguineoRow), CheckNames = true)]
    public class TipoSanguineoColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Guid IdTipoSanguineo { get; set; }
        [EditLink]
        public String Descricao { get; set; }
    }
}