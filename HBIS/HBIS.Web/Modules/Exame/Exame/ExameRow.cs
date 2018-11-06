
namespace HBIS.Exame.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("Exame"), TableName("[cad].[Exame]")]
    [DisplayName("Exame"), InstanceName("Exame")]
    [ReadPermission("User:General")]
    [ModifyPermission("User:General")]
    public sealed class ExameRow : Row, IIdRow, INameRow
    {
        [DisplayName("Id Exame"), Identity]
        public Int32? IdExame
        {
            get { return Fields.IdExame[this]; }
            set { Fields.IdExame[this] = value; }
        }

        [DisplayName("Cpf"), Size(50), ForeignKey("[cad].[Paciente]", "Cpf"), LeftJoin("jCpf"), QuickSearch, TextualField("CpfNome")]
        public String Cpf
        {
            get { return Fields.Cpf[this]; }
            set { Fields.Cpf[this] = value; }
        }

        [DisplayName("Crm"), Size(50), ForeignKey("[cad].[Medico]", "Crm"), LeftJoin("jCrm"), TextualField("CrmNome")]
        public String Crm
        {
            get { return Fields.Crm[this]; }
            set { Fields.Crm[this] = value; }
        }

        [DisplayName("Data"), Size(50), ForeignKey("[cad].[Data]", "IdData"), LeftJoin("jIdData"), DisplayFormat("dd/MM/yyyy")]
        public String IdData
        {
            get { return Fields.IdData[this]; }
            set { Fields.IdData[this] = value; }
        }

        [DisplayName("Descricao Exame"), ForeignKey("[cad].[ExameDescicao]", "IdExameDescricao"), LeftJoin("jIdExameDescricao"), TextualField("IdExameDescricaoDescricao")]
        public Int32? IdExameDescricao
        {
            get { return Fields.IdExameDescricao[this]; }
            set { Fields.IdExameDescricao[this] = value; }
        }

        [DisplayName("Resultado"), Size(18), Scale(2)]
        public Decimal? Resultado
        {
            get { return Fields.Resultado[this]; }
            set { Fields.Resultado[this] = value; }
        }

        [DisplayName("Cpf Id Sexo"), Expression("jCpf.[IdSexo]")]
        public Int32? CpfIdSexo
        {
            get { return Fields.CpfIdSexo[this]; }
            set { Fields.CpfIdSexo[this] = value; }
        }

        [DisplayName("Cpf Id Tipo Sanguineo"), Expression("jCpf.[IdTipoSanguineo]")]
        public Int32? CpfIdTipoSanguineo
        {
            get { return Fields.CpfIdTipoSanguineo[this]; }
            set { Fields.CpfIdTipoSanguineo[this] = value; }
        }

        [DisplayName("Nome Paciente"), Expression("jCpf.[Nome]")]
        public String CpfNome
        {
            get { return Fields.CpfNome[this]; }
            set { Fields.CpfNome[this] = value; }
        }

        [DisplayName("Cpf Altura"), Expression("jCpf.[Altura]")]
        public Decimal? CpfAltura
        {
            get { return Fields.CpfAltura[this]; }
            set { Fields.CpfAltura[this] = value; }
        }

        [DisplayName("Cpf Peso"), Expression("jCpf.[Peso]")]
        public Decimal? CpfPeso
        {
            get { return Fields.CpfPeso[this]; }
            set { Fields.CpfPeso[this] = value; }
        }

        [DisplayName("Cpf Data Nascimento"), Expression("jCpf.[DataNascimento]")]
        public DateTime? CpfDataNascimento
        {
            get { return Fields.CpfDataNascimento[this]; }
            set { Fields.CpfDataNascimento[this] = value; }
        }

        [DisplayName("Cpf Email"), Expression("jCpf.[Email]")]
        public String CpfEmail
        {
            get { return Fields.CpfEmail[this]; }
            set { Fields.CpfEmail[this] = value; }
        }

        [DisplayName("Cpf Glicemia Ideal"), Expression("jCpf.[GlicemiaIdeal]")]
        public Decimal? CpfGlicemiaIdeal
        {
            get { return Fields.CpfGlicemiaIdeal[this]; }
            set { Fields.CpfGlicemiaIdeal[this] = value; }
        }

        [DisplayName("Nome Médico"), Expression("jCrm.[Nome]")]
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

        [DisplayName("Id Data Id Ano"), Expression("jIdData.[IdAno]")]
        public Int32? IdDataIdAno
        {
            get { return Fields.IdDataIdAno[this]; }
            set { Fields.IdDataIdAno[this] = value; }
        }

        [DisplayName("Id Data Id Mes"), Expression("jIdData.[IdMes]")]
        public Int32? IdDataIdMes
        {
            get { return Fields.IdDataIdMes[this]; }
            set { Fields.IdDataIdMes[this] = value; }
        }

        [DisplayName("Id Data Id Dia"), Expression("jIdData.[IdDia]")]
        public Int32? IdDataIdDia
        {
            get { return Fields.IdDataIdDia[this]; }
            set { Fields.IdDataIdDia[this] = value; }
        }

        [DisplayName("Id Exame Descricao Descricao"), Expression("jIdExameDescricao.[Descricao]")]
        public String IdExameDescricaoDescricao
        {
            get { return Fields.IdExameDescricaoDescricao[this]; }
            set { Fields.IdExameDescricaoDescricao[this] = value; }
        }

        [DisplayName("Id Exame Descricao Valor Minimo"), Expression("jIdExameDescricao.[ValorMinimo]")]
        public Decimal? IdExameDescricaoValorMinimo
        {
            get { return Fields.IdExameDescricaoValorMinimo[this]; }
            set { Fields.IdExameDescricaoValorMinimo[this] = value; }
        }

        [DisplayName("Id Exame Descricao Valor Maximo"), Expression("jIdExameDescricao.[ValorMaximo]")]
        public Decimal? IdExameDescricaoValorMaximo
        {
            get { return Fields.IdExameDescricaoValorMaximo[this]; }
            set { Fields.IdExameDescricaoValorMaximo[this] = value; }
        }

        [DisplayName("Id Exame Descricao Unidade"), Expression("jIdExameDescricao.[Unidade]")]
        public String IdExameDescricaoUnidade
        {
            get { return Fields.IdExameDescricaoUnidade[this]; }
            set { Fields.IdExameDescricaoUnidade[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.IdExame; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.Cpf; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public ExameRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field IdExame;
            public StringField Cpf;
            public StringField Crm;
            public StringField IdData;
            public Int32Field IdExameDescricao;
            public DecimalField Resultado;

            public Int32Field CpfIdSexo;
            public Int32Field CpfIdTipoSanguineo;
            public StringField CpfNome;
            public DecimalField CpfAltura;
            public DecimalField CpfPeso;
            public DateTimeField CpfDataNascimento;
            public StringField CpfEmail;
            public DecimalField CpfGlicemiaIdeal;

            public StringField CrmNome;
            public StringField CrmEmail;

            public Int32Field IdDataIdAno;
            public Int32Field IdDataIdMes;
            public Int32Field IdDataIdDia;

            public StringField IdExameDescricaoDescricao;
            public DecimalField IdExameDescricaoValorMinimo;
            public DecimalField IdExameDescricaoValorMaximo;
            public StringField IdExameDescricaoUnidade;
        }
    }
}
