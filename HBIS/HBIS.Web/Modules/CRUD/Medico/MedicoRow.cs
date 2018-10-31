
namespace HBIS.CRUD.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("CRUD"), TableName("[cad].[Medico]")]
    [DisplayName("Medico"), InstanceName("Medico")]
    [ReadPermission("User:General")]
    [ModifyPermission("User:General")]
    public sealed class MedicoRow : Row, IIdRow, INameRow
    {
        [DisplayName("Crm"), Column("CRM"), Size(50), PrimaryKey, QuickSearch]
        public String Crm
        {
            get { return Fields.Crm[this]; }
            set { Fields.Crm[this] = value; }
        }

        [DisplayName("Cpf"), Column("CPF"), Size(50)]
        public String Cpf
        {
            get { return Fields.Cpf[this]; }
            set { Fields.Cpf[this] = value; }
        }

        [DisplayName("Nome"), Size(50)]
        public String Nome
        {
            get { return Fields.Nome[this]; }
            set { Fields.Nome[this] = value; }
        }

        [DisplayName("Email"), Size(50)]
        public String Email
        {
            get { return Fields.Email[this]; }
            set { Fields.Email[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.Crm; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.Crm; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public MedicoRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public StringField Crm;
            public StringField Cpf;
            public StringField Nome;
            public StringField Email;
        }
    }
}
