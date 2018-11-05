
namespace HBIS.ADD.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("ADD.Exame")]
    [BasedOnRow(typeof(Entities.ExameRow), CheckNames = true)]
    public class ExameForm
    {
        [DisplayName("Paciente")]
        public Int32 IdPaciente { get; set; }
        [DisplayName("Médico Solicitante")]
        public String Crm { get; set; }
        [DisplayName("Descrição Exame")]
        public Int32 IdExameDescricao { get; set; }
        [DisplayName("Resultado")]
        public Decimal Resultado { get; set; }
    }
}