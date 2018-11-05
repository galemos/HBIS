
namespace HBIS.ADD.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("ADD"), TableName("[cad].[Historico]")]
    [DisplayName("Historico"), InstanceName("Historico")]
    [ReadPermission("User:General")]
    [ModifyPermission("User:General")]
    public sealed class HistoricoRow : Row, IIdRow
    {
        [DisplayName("Id Historico"), Identity]
        public Int32? IdHistorico
        {
            get { return Fields.IdHistorico[this]; }
            set { Fields.IdHistorico[this] = value; }
        }

        [DisplayName("Id Paciente"), NotNull, ForeignKey("[cad].[Paciente]", "IdPaciente"), LeftJoin("jIdPaciente"), TextualField("IdPacienteContatoEmergencia")]
        public Int32? IdPaciente
        {
            get { return Fields.IdPaciente[this]; }
            set { Fields.IdPaciente[this] = value; }
        }

        [DisplayName("Carboidrato"), Size(18), Scale(2)]
        public Decimal? Carboidrato
        {
            get { return Fields.Carboidrato[this]; }
            set { Fields.Carboidrato[this] = value; }
        }

        [DisplayName("Data")]
        public DateTime? Data
        {
            get { return Fields.Data[this]; }
            set { Fields.Data[this] = value; }
        }

        [DisplayName("Glicemia Atual"), Size(18), Scale(2)]
        public Decimal? GlicemiaAtual
        {
            get { return Fields.GlicemiaAtual[this]; }
            set { Fields.GlicemiaAtual[this] = value; }
        }

        [DisplayName("Insulina"), Size(18), Scale(2)]
        public Decimal? Insulina
        {
            get { return Fields.Insulina[this]; }
            set { Fields.Insulina[this] = value; }
        }

        [DisplayName("Id Paciente Id Sexo"), Expression("jIdPaciente.[IdSexo]")]
        public Int32? IdPacienteIdSexo
        {
            get { return Fields.IdPacienteIdSexo[this]; }
            set { Fields.IdPacienteIdSexo[this] = value; }
        }

        [DisplayName("Id Paciente Id Tipo Sanguineo"), Expression("jIdPaciente.[IdTipoSanguineo]")]
        public Int32? IdPacienteIdTipoSanguineo
        {
            get { return Fields.IdPacienteIdTipoSanguineo[this]; }
            set { Fields.IdPacienteIdTipoSanguineo[this] = value; }
        }

        [DisplayName("Id Paciente Altura"), Expression("jIdPaciente.[Altura]")]
        public Decimal? IdPacienteAltura
        {
            get { return Fields.IdPacienteAltura[this]; }
            set { Fields.IdPacienteAltura[this] = value; }
        }

        [DisplayName("Id Paciente Contato Emergencia"), Expression("jIdPaciente.[ContatoEmergencia]")]
        public String IdPacienteContatoEmergencia
        {
            get { return Fields.IdPacienteContatoEmergencia[this]; }
            set { Fields.IdPacienteContatoEmergencia[this] = value; }
        }

        [DisplayName("Id Paciente Data Nascimento"), Expression("jIdPaciente.[DataNascimento]")]
        public DateTime? IdPacienteDataNascimento
        {
            get { return Fields.IdPacienteDataNascimento[this]; }
            set { Fields.IdPacienteDataNascimento[this] = value; }
        }

        [DisplayName("Id Paciente Email"), Expression("jIdPaciente.[Email]")]
        public String IdPacienteEmail
        {
            get { return Fields.IdPacienteEmail[this]; }
            set { Fields.IdPacienteEmail[this] = value; }
        }

        [DisplayName("Id Paciente Fator Correcao"), Expression("jIdPaciente.[FatorCorrecao]")]
        public Decimal? IdPacienteFatorCorrecao
        {
            get { return Fields.IdPacienteFatorCorrecao[this]; }
            set { Fields.IdPacienteFatorCorrecao[this] = value; }
        }

        [DisplayName("Id Paciente Glicemia Ideal"), Expression("jIdPaciente.[GlicemiaIdeal]")]
        public Decimal? IdPacienteGlicemiaIdeal
        {
            get { return Fields.IdPacienteGlicemiaIdeal[this]; }
            set { Fields.IdPacienteGlicemiaIdeal[this] = value; }
        }

        [DisplayName("Id Paciente Insulina Basal"), Expression("jIdPaciente.[InsulinaBasal]")]
        public Decimal? IdPacienteInsulinaBasal
        {
            get { return Fields.IdPacienteInsulinaBasal[this]; }
            set { Fields.IdPacienteInsulinaBasal[this] = value; }
        }

        [DisplayName("Id Paciente Insulina Rapida"), Expression("jIdPaciente.[InsulinaRapida]")]
        public Decimal? IdPacienteInsulinaRapida
        {
            get { return Fields.IdPacienteInsulinaRapida[this]; }
            set { Fields.IdPacienteInsulinaRapida[this] = value; }
        }

        [DisplayName("Id Paciente Nome"), Expression("jIdPaciente.[Nome]")]
        public String IdPacienteNome
        {
            get { return Fields.IdPacienteNome[this]; }
            set { Fields.IdPacienteNome[this] = value; }
        }

        [DisplayName("Id Paciente Peso"), Expression("jIdPaciente.[Peso]")]
        public Decimal? IdPacientePeso
        {
            get { return Fields.IdPacientePeso[this]; }
            set { Fields.IdPacientePeso[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.IdHistorico; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public HistoricoRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field IdHistorico;
            public Int32Field IdPaciente;
            public DecimalField Carboidrato;
            public DateTimeField Data;
            public DecimalField GlicemiaAtual;
            public DecimalField Insulina;

            public Int32Field IdPacienteIdSexo;
            public Int32Field IdPacienteIdTipoSanguineo;
            public DecimalField IdPacienteAltura;
            public StringField IdPacienteContatoEmergencia;
            public DateTimeField IdPacienteDataNascimento;
            public StringField IdPacienteEmail;
            public DecimalField IdPacienteFatorCorrecao;
            public DecimalField IdPacienteGlicemiaIdeal;
            public DecimalField IdPacienteInsulinaBasal;
            public DecimalField IdPacienteInsulinaRapida;
            public StringField IdPacienteNome;
            public DecimalField IdPacientePeso;
        }
    }
}
