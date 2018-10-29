
namespace HBI.OLTP.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("OLTP"), Module("OLTP"), TableName("[dbo].[Paciente]")]
    [DisplayName("Paciente"), InstanceName("Paciente")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    public sealed class PacienteRow : Row, IIdRow, INameRow
    {
        [DisplayName("Id Paciente"), NotNull]
        public Guid? IdPaciente
        {
            get { return Fields.IdPaciente[this]; }
            set { Fields.IdPaciente[this] = value; }
        }

        [DisplayName("Altura"), Size(18), Scale(2)]
        public Decimal? Altura
        {
            get { return Fields.Altura[this]; }
            set { Fields.Altura[this] = value; }
        }

        [DisplayName("Contato Emergencia"), Size(50), QuickSearch]
        public String ContatoEmergencia
        {
            get { return Fields.ContatoEmergencia[this]; }
            set { Fields.ContatoEmergencia[this] = value; }
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

        [DisplayName("Fator Correcao"), Size(18), Scale(2)]
        public Decimal? FatorCorrecao
        {
            get { return Fields.FatorCorrecao[this]; }
            set { Fields.FatorCorrecao[this] = value; }
        }

        [DisplayName("Glicemia Ideal"), Size(18), Scale(2)]
        public Decimal? GlicemiaIdeal
        {
            get { return Fields.GlicemiaIdeal[this]; }
            set { Fields.GlicemiaIdeal[this] = value; }
        }

        [DisplayName("Insulina Basal"), Size(18), Scale(2)]
        public Decimal? InsulinaBasal
        {
            get { return Fields.InsulinaBasal[this]; }
            set { Fields.InsulinaBasal[this] = value; }
        }

        [DisplayName("Insulina Rapida"), Size(18), Scale(2)]
        public Decimal? InsulinaRapida
        {
            get { return Fields.InsulinaRapida[this]; }
            set { Fields.InsulinaRapida[this] = value; }
        }

        [DisplayName("Nome"), Size(50)]
        public String Nome
        {
            get { return Fields.Nome[this]; }
            set { Fields.Nome[this] = value; }
        }

        [DisplayName("Peso"), Size(18), Scale(2)]
        public Decimal? Peso
        {
            get { return Fields.Peso[this]; }
            set { Fields.Peso[this] = value; }
        }

        [DisplayName("Sexo"), Size(50)]
        public String Sexo
        {
            get { return Fields.Sexo[this]; }
            set { Fields.Sexo[this] = value; }
        }

        [DisplayName("Tipo Sanguineo"), Size(50)]
        public String TipoSanguineo
        {
            get { return Fields.TipoSanguineo[this]; }
            set { Fields.TipoSanguineo[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.IdPaciente; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.ContatoEmergencia; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public PacienteRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public GuidField IdPaciente;
            public DecimalField Altura;
            public StringField ContatoEmergencia;
            public DateTimeField DataNascimento;
            public StringField Email;
            public DecimalField FatorCorrecao;
            public DecimalField GlicemiaIdeal;
            public DecimalField InsulinaBasal;
            public DecimalField InsulinaRapida;
            public StringField Nome;
            public DecimalField Peso;
            public StringField Sexo;
            public StringField TipoSanguineo;
        }
    }
}
