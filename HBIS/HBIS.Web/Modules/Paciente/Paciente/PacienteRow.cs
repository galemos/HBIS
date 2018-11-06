
namespace HBIS.Paciente.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("Paciente"), TableName("[cad].[Paciente]")]
    [DisplayName("Paciente"), InstanceName("Paciente")]
    [ReadPermission("User:General")]
    [ModifyPermission("User:General")]
    public sealed class PacienteRow : Row, IIdRow, INameRow
    {
        [DisplayName("Cpf"), Size(50), PrimaryKey, QuickSearch]
        public String Cpf
        {
            get { return Fields.Cpf[this]; }
            set { Fields.Cpf[this] = value; }
        }

        [DisplayName("Id Sexo"), ForeignKey("[cad].[Sexo]", "IdSexo"), LeftJoin("jIdSexo"), TextualField("IdSexoDescricao")]
        public Int32? IdSexo
        {
            get { return Fields.IdSexo[this]; }
            set { Fields.IdSexo[this] = value; }
        }

        [DisplayName("Id Tipo Sanguineo"), ForeignKey("[cad].[TipoSanguineo]", "IdTipoSanguineo"), LeftJoin("jIdTipoSanguineo"), TextualField("IdTipoSanguineoDescricao")]
        public Int32? IdTipoSanguineo
        {
            get { return Fields.IdTipoSanguineo[this]; }
            set { Fields.IdTipoSanguineo[this] = value; }
        }

        [DisplayName("Nome"), Size(50)]
        public String Nome
        {
            get { return Fields.Nome[this]; }
            set { Fields.Nome[this] = value; }
        }

        [DisplayName("Altura"), Size(18), Scale(2)]
        public Decimal? Altura
        {
            get { return Fields.Altura[this]; }
            set { Fields.Altura[this] = value; }
        }

        [DisplayName("Peso"), Size(18), Scale(2)]
        public Decimal? Peso
        {
            get { return Fields.Peso[this]; }
            set { Fields.Peso[this] = value; }
        }

        [DisplayName("Data Nascimento")]
        public DateTime? DataNascimento
        {
            get { return Fields.DataNascimento[this]; }
            set { Fields.DataNascimento[this] = value; }
        }

        [DisplayName("Email"), Size(50)]
        public String Email
        {
            get { return Fields.Email[this]; }
            set { Fields.Email[this] = value; }
        }

        [DisplayName("Glicemia Ideal"), Size(18), Scale(2)]
        public Decimal? GlicemiaIdeal
        {
            get { return Fields.GlicemiaIdeal[this]; }
            set { Fields.GlicemiaIdeal[this] = value; }
        }

        [DisplayName("Sexo"), Expression("jIdSexo.[Descricao]")]
        public String IdSexoDescricao
        {
            get { return Fields.IdSexoDescricao[this]; }
            set { Fields.IdSexoDescricao[this] = value; }
        }

        [DisplayName("Tipo Sanguineo"), Expression("jIdTipoSanguineo.[Descricao]")]
        public String IdTipoSanguineoDescricao
        {
            get { return Fields.IdTipoSanguineoDescricao[this]; }
            set { Fields.IdTipoSanguineoDescricao[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.Cpf; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.Cpf; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public PacienteRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public StringField Cpf;
            public Int32Field IdSexo;
            public Int32Field IdTipoSanguineo;
            public StringField Nome;
            public DecimalField Altura;
            public DecimalField Peso;
            public DateTimeField DataNascimento;
            public StringField Email;
            public DecimalField GlicemiaIdeal;

            public StringField IdSexoDescricao;

            public StringField IdTipoSanguineoDescricao;
        }
    }
}
