
namespace HBIS.CRUD.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("CRUD"), TableName("[cad].[Exame]")]
    [DisplayName("Exame"), InstanceName("Exame")]
    [ReadPermission("User:General")]
    [ModifyPermission("User:General")]
    public sealed class ExameRow : Row, IIdRow, INameRow
    {
        [DisplayName("Id Exame"), PrimaryKey]
        public Int32? IdExame
        {
            get { return Fields.IdExame[this]; }
            set { Fields.IdExame[this] = value; }
        }

        [DisplayName("Id Paciente"), NotNull, ForeignKey("[cad].[Paciente]", "IdPaciente"), LeftJoin("jIdPaciente"), TextualField("IdPacienteContatoEmergencia")]
        public Int32? IdPaciente
        {
            get { return Fields.IdPaciente[this]; }
            set { Fields.IdPaciente[this] = value; }
        }

        [DisplayName("Id Exame Descicao"), NotNull, ForeignKey("[cad].[ExameDescicao]", "IdExameDescricao"), LeftJoin("jIdExameDescicao"), TextualField("IdExameDescicaoDescricao")]
        public Int32? IdExameDescicao
        {
            get { return Fields.IdExameDescicao[this]; }
            set { Fields.IdExameDescicao[this] = value; }
        }

        [DisplayName("Crm"), Column("CRM"), Size(50), NotNull, ForeignKey("[cad].[Medico]", "CRM"), LeftJoin("jCrm"), QuickSearch, TextualField("CrmCpf")]
        public String Crm
        {
            get { return Fields.Crm[this]; }
            set { Fields.Crm[this] = value; }
        }

        [DisplayName("Resultado"), Size(18), Scale(2)]
        public Decimal? Resultado
        {
            get { return Fields.Resultado[this]; }
            set { Fields.Resultado[this] = value; }
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

        [DisplayName("Id Exame Descicao Descricao"), Expression("jIdExameDescicao.[Descricao]")]
        public String IdExameDescicaoDescricao
        {
            get { return Fields.IdExameDescicaoDescricao[this]; }
            set { Fields.IdExameDescicaoDescricao[this] = value; }
        }

        [DisplayName("Crm Cpf"), Expression("jCrm.[CPF]")]
        public String CrmCpf
        {
            get { return Fields.CrmCpf[this]; }
            set { Fields.CrmCpf[this] = value; }
        }

        [DisplayName("Crm Nome"), Expression("jCrm.[Nome]")]
        public String CrmNome
        {
            get { return Fields.CrmNome[this]; }
            set { Fields.CrmNome[this] = value; }
        }

        [DisplayName("Crm Email"), Expression("jCrm.[Email]")]
        public String CrmEmail
        {
            get { return Fields.CrmEmail[this]; }
            set { Fields.CrmEmail[this] = value; }
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
            public Int32Field IdExame;
            public Int32Field IdPaciente;
            public Int32Field IdExameDescicao;
            public StringField Crm;
            public DecimalField Resultado;

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

            public StringField IdExameDescicaoDescricao;

            public StringField CrmCpf;
            public StringField CrmNome;
            public StringField CrmEmail;
        }
    }
}
