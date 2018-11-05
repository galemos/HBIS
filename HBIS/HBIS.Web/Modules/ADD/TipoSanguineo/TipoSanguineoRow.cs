
namespace HBIS.ADD.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("ADD"), TableName("[cad].[TipoSanguineo]")]
    [DisplayName("Tipo Sanguineo"), InstanceName("Tipo Sanguineo")]
    [ReadPermission("User:General")]
    [ModifyPermission("User:General")]
    public sealed class TipoSanguineoRow : Row, IIdRow, INameRow
    {
        [DisplayName("Id Tipo Sanguineo"), Identity]
        public Int32? IdTipoSanguineo
        {
            get { return Fields.IdTipoSanguineo[this]; }
            set { Fields.IdTipoSanguineo[this] = value; }
        }

        [DisplayName("Descricao"), Size(50), QuickSearch]
        public String Descricao
        {
            get { return Fields.Descricao[this]; }
            set { Fields.Descricao[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.IdTipoSanguineo; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.Descricao; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public TipoSanguineoRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field IdTipoSanguineo;
            public StringField Descricao;
        }
    }
}
