
namespace HBIS.Paciente.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Paciente.Paciente")]
    [BasedOnRow(typeof(Entities.PacienteRow), CheckNames = true)]
    public class PacienteColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public String Cpf { get; set; }
        public String IdSexoDescricao { get; set; }
        public String IdTipoSanguineoDescricao { get; set; }
        public String Nome { get; set; }
        public Decimal Altura { get; set; }
        public Decimal Peso { get; set; }
        public DateTime DataNascimento { get; set; }
        public String Email { get; set; }
        public Decimal GlicemiaIdeal { get; set; }
    }
}