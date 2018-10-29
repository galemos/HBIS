
namespace HBI.OLTP.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("OLTP"), Module("OLTP"), TableName("[dbo].[Historico]")]
    [DisplayName("Historico"), InstanceName("Historico")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    public sealed class HistoricoRow : Row, IIdRow
    {
        [DisplayName("Id Historico"), NotNull]
        public Guid? IdHistorico
        {
            get { return Fields.IdHistorico[this]; }
            set { Fields.IdHistorico[this] = value; }
        }

        [DisplayName("Id Paciente"), NotNull]
        public Guid? IdPaciente
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
            public GuidField IdHistorico;
            public GuidField IdPaciente;
            public DecimalField Carboidrato;
            public DateTimeField Data;
            public DecimalField GlicemiaAtual;
            public DecimalField Insulina;
        }
    }
}
