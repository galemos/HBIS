
namespace HBIS.Paciente.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Paciente.Paciente")]
    [BasedOnRow(typeof(Entities.PacienteRow), CheckNames = true)]
    public class PacienteForm
    {
        public Int32 IdSexo { get; set; }
        public Int32 IdTipoSanguineo { get; set; }
        public String Nome { get; set; }
        public Decimal Altura { get; set; }
        public Decimal Peso { get; set; }
        public DateTime DataNascimento { get; set; }
        public String Email { get; set; }
        public Decimal GlicemiaIdeal { get; set; }
    }
}