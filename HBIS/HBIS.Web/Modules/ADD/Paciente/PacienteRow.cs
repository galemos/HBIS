
namespace HBIS.ADD.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("ADD"), TableName("[cad].[Paciente]")]
    [DisplayName("Paciente"), InstanceName("Paciente")]
    [ReadPermission("User:General")]
    [ModifyPermission("User:General")]
    public sealed class PacienteRow : Row, IIdRow, INameRow
    {
        [DisplayName("Id Paciente"), Identity]
        public Int32? IdPaciente
        {
            get { return Fields.IdPaciente[this]; }
            set { Fields.IdPaciente[this] = value; }
        }

        [DisplayName("Id Sexo"), NotNull, ForeignKey("[cad].[Sexo]", "IdSexo"), LeftJoin("jIdSexo"), TextualField("IdSexoDescricao")]
        public Int32? IdSexo
        {
            get { return Fields.IdSexo[this]; }
            set { Fields.IdSexo[this] = value; }
        }

        [DisplayName("Id Tipo Sanguineo"), NotNull, ForeignKey("[cad].[TipoSanguineo]", "IdTipoSanguineo"), LeftJoin("jIdTipoSanguineo"), TextualField("IdTipoSanguineoDescricao")]
        public Int32? IdTipoSanguineo
        {
            get { return Fields.IdTipoSanguineo[this]; }
            set { Fields.IdTipoSanguineo[this] = value; }
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

        [DisplayName("Id Sexo Descricao"), Expression("jIdSexo.[Descricao]")]
        public String IdSexoDescricao
        {
            get { return Fields.IdSexoDescricao[this]; }
            set { Fields.IdSexoDescricao[this] = value; }
        }

        [DisplayName("Id Tipo Sanguineo Descricao"), Expression("jIdTipoSanguineo.[Descricao]")]
        public String IdTipoSanguineoDescricao
        {
            get { return Fields.IdTipoSanguineoDescricao[this]; }
            set { Fields.IdTipoSanguineoDescricao[this] = value; }
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
            public Int32Field IdPaciente;
            public Int32Field IdSexo;
            public Int32Field IdTipoSanguineo;
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

            public StringField IdSexoDescricao;

            public StringField IdTipoSanguineoDescricao;
        }
    }
}
