using Serenity.Navigation;
using MyPages = HBIS.OLTP.Pages;

[assembly: NavigationLink(int.MaxValue, "OLTP/Exame", typeof(MyPages.ExameController), icon: null)]
[assembly: NavigationLink(int.MaxValue, "OLTP/Historico", typeof(MyPages.HistoricoController), icon: null)]
[assembly: NavigationLink(int.MaxValue, "OLTP/Medico", typeof(MyPages.MedicoController), icon: null)]
[assembly: NavigationLink(int.MaxValue, "OLTP/Paciente", typeof(MyPages.PacienteController), icon: null)]