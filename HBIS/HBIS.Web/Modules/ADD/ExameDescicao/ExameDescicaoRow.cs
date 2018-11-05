
namespace HBIS.ADD.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("ADD"), TableName("[cad].[ExameDescicao]")]
    [DisplayName("Exame Descicao"), InstanceName("Exame Descicao")]
    [ReadPermission("User:General")]
    [ModifyPermission("User:General")]
    public sealed class ExameDescicaoRow : Row, IIdRow, INameRow
    {
        [DisplayName("Id Exame Descricao"), Identity]
        public Int32? IdExameDescricao
        {
            get { return Fields.IdExameDescricao[this]; }
            set { Fields.IdExameDescricao[this] = value; }
        }

        [DisplayName("Descricao"), Size(50), QuickSearch]
        public String Descricao
        {
            get { return Fields.Descricao[this]; }
            set { Fields.Descricao[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.IdExameDescricao; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.Descricao; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public ExameDescicaoRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field IdExameDescricao;
            public StringField Descricao;
        }
    }
}
