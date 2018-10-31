
namespace HBIS.CRUD.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("CRUD.Paciente")]
    [BasedOnRow(typeof(Entities.PacienteRow), CheckNames = true)]
    public class PacienteForm
    {
        public Guid IdSexo { get; set; }
        public Guid IdTipoSanguineo { get; set; }
        public Decimal Altura { get; set; }
        public String ContatoEmergencia { get; set; }
        public DateTime DataNascimento { get; set; }
        public String Email { get; set; }
        public Decimal FatorCorrecao { get; set; }
        public Decimal GlicemiaIdeal { get; set; }
        public Decimal InsulinaBasal { get; set; }
        public Decimal InsulinaRapida { get; set; }
        public String Nome { get; set; }
        public Decimal Peso { get; set; }
    }
}