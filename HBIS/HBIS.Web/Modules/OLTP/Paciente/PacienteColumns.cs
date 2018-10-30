
namespace HBIS.OLTP.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("OLTP.Paciente")]
    [BasedOnRow(typeof(Entities.PacienteRow), CheckNames = true)]
    public class PacienteColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Guid IdPaciente { get; set; }
        public Decimal Altura { get; set; }
        [EditLink]
        public String ContatoEmergencia { get; set; }
        public DateTime DataNascimento { get; set; }
        public String Email { get; set; }
        public Decimal FatorCorrecao { get; set; }
        public Decimal GlicemiaIdeal { get; set; }
        public Decimal InsulinaBasal { get; set; }
        public Decimal InsulinaRapida { get; set; }
        public String Nome { get; set; }
        public Decimal Peso { get; set; }
        public String Sexo { get; set; }
        public String TipoSanguineo { get; set; }
    }
}