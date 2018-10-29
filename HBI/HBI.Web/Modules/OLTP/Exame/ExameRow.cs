
namespace HBI.OLTP.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("OLTP"), Module("OLTP"), TableName("[dbo].[Exame]")]
    [DisplayName("Exame"), InstanceName("Exame")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    public sealed class ExameRow : Row, IIdRow, INameRow
    {
        [DisplayName("Id Exame"), NotNull]
        public Guid? IdExame
        {
            get { return Fields.IdExame[this]; }
            set { Fields.IdExame[this] = value; }
        }

        [DisplayName("Id Paciente"), NotNull]
        public Guid? IdPaciente
        {
            get { return Fields.IdPaciente[this]; }
            set { Fields.IdPaciente[this] = value; }
        }

        [DisplayName("Crm"), Column("CRM"), Size(50), NotNull, QuickSearch]
        public String Crm
        {
            get { return Fields.Crm[this]; }
            set { Fields.Crm[this] = value; }
        }

        [DisplayName("Titulo Exame"), Size(50)]
        public String TituloExame
        {
            get { return Fields.TituloExame[this]; }
            set { Fields.TituloExame[this] = value; }
        }

        [DisplayName("Resultado"), Size(18), Scale(2)]
        public Decimal? Resultado
        {
            get { return Fields.Resultado[this]; }
            set { Fields.Resultado[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.IdExame; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.Crm; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public ExameRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public GuidField IdExame;
            public GuidField IdPaciente;
            public StringField Crm;
            public StringField TituloExame;
            public DecimalField Resultado;
        }
    }
}
