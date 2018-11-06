
namespace HBIS.Historico.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Default"), Module("Historico"), TableName("[cad].[Historico]")]
    [DisplayName("Historico"), InstanceName("Historico")]
    [ReadPermission("User:General")]
    [ModifyPermission("User:General")]
    public sealed class HistoricoRow : Row, IIdRow, INameRow
    {
        [DisplayName("Id Historico"), Identity]
        public Int32? IdHistorico
        {
            get { return Fields.IdHistorico[this]; }
            set { Fields.IdHistorico[this] = value; }
        }

        [DisplayName("Cpf"), Size(50), ForeignKey("[cad].[Paciente]", "Cpf"), LeftJoin("jCpf"), QuickSearch, TextualField("CpfNome")]
        public String Cpf
        {
            get { return Fields.Cpf[this]; }
            set { Fields.Cpf[this] = value; }
        }

        [DisplayName("Id Periodo"), ForeignKey("[cad].[Periodo]", "IdPeriodo"), LeftJoin("jIdPeriodo"), TextualField("IdPeriodoDescricao")]
        public Int32? IdPeriodo
        {
            get { return Fields.IdPeriodo[this]; }
            set { Fields.IdPeriodo[this] = value; }
        }

        [DisplayName("Data"), Size(50), ForeignKey("[cad].[Data]", "IdData"), LeftJoin("jIdData"), DisplayFormat("dd/MM/yyyy")]
        public String IdData
        {
            get { return Fields.IdData[this]; }
            set { Fields.IdData[this] = value; }
        }

        [DisplayName("Glicemia Antes"), Size(18), Scale(2)]
        public Decimal? GlicemiaAntes
        {
            get { return Fields.GlicemiaAntes[this]; }
            set { Fields.GlicemiaAntes[this] = value; }
        }

        [DisplayName("Glicemia Depois"), Size(18), Scale(2)]
        public Decimal? GlicemiaDepois
        {
            get { return Fields.GlicemiaDepois[this]; }
            set { Fields.GlicemiaDepois[this] = value; }
        }

        [DisplayName("Insulina Total"), Size(18), Scale(2)]
        public Decimal? InsulinaTotal
        {
            get { return Fields.InsulinaTotal[this]; }
            set { Fields.InsulinaTotal[this] = value; }
        }

        [DisplayName("Status"), Size(50)]
        public String Status
        {
            get { return Fields.Status[this]; }
            set { Fields.Status[this] = value; }
        }

        [DisplayName("Glicemia Ideal"), Size(18), Scale(2)]
        public Decimal? GlicemiaIdeal
        {
            get { return Fields.GlicemiaIdeal[this]; }
            set { Fields.GlicemiaIdeal[this] = value; }
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

        [DisplayName("Periodo Aferição"), Expression("jIdPeriodo.[Descricao]")]
        public String IdPeriodoDescricao
        {
            get { return Fields.IdPeriodoDescricao[this]; }
            set { Fields.IdPeriodoDescricao[this] = value; }
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

        IIdField IIdRow.IdField
        {
            get { return Fields.IdHistorico; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.Cpf; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public HistoricoRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field IdHistorico;
            public StringField Cpf;
            public Int32Field IdPeriodo;
            public StringField IdData;
            public DecimalField GlicemiaAntes;
            public DecimalField GlicemiaDepois;
            public DecimalField InsulinaTotal;
            public StringField Status;
            public DecimalField GlicemiaIdeal;

            public Int32Field CpfIdSexo;
            public Int32Field CpfIdTipoSanguineo;
            public StringField CpfNome;
            public DecimalField CpfAltura;
            public DecimalField CpfPeso;
            public DateTimeField CpfDataNascimento;
            public StringField CpfEmail;
            public DecimalField CpfGlicemiaIdeal;

            public StringField IdPeriodoDescricao;

            public Int32Field IdDataIdAno;
            public Int32Field IdDataIdMes;
            public Int32Field IdDataIdDia;
        }
    }
}
