
namespace HBIS.ADD.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("ADD"), TableName("[cad].[Sexo]")]
    [DisplayName("Sexo"), InstanceName("Sexo")]
    [ReadPermission("User:General")]
    [ModifyPermission("User:General")]
    public sealed class SexoRow : Row, IIdRow, INameRow
    {
        [DisplayName("Id Sexo"), Identity]
        public Int32? IdSexo
        {
            get { return Fields.IdSexo[this]; }
            set { Fields.IdSexo[this] = value; }
        }

        [DisplayName("Descricao"), Size(50), QuickSearch]
        public String Descricao
        {
            get { return Fields.Descricao[this]; }
            set { Fields.Descricao[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.IdSexo; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.Descricao; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public SexoRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field IdSexo;
            public StringField Descricao;
        }
    }
}
