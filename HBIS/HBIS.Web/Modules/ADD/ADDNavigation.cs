using Serenity.Navigation;
using MyPages = HBIS.ADD.Pages;

[assembly: NavigationLink(int.MaxValue, "ADD/Exame", typeof(MyPages.ExameController), icon: null)]
[assembly: NavigationLink(int.MaxValue, "ADD/Exame Descicao", typeof(MyPages.ExameDescicaoController), icon: null)]
[assembly: NavigationLink(int.MaxValue, "ADD/Historico", typeof(MyPages.HistoricoController), icon: null)]
[assembly: NavigationLink(int.MaxValue, "ADD/Medico", typeof(MyPages.MedicoController), icon: null)]
[assembly: NavigationLink(int.MaxValue, "ADD/Paciente", typeof(MyPages.PacienteController), icon: null)]
[assembly: NavigationLink(int.MaxValue, "ADD/Sexo", typeof(MyPages.SexoController), icon: null)]
[assembly: NavigationLink(int.MaxValue, "ADD/Tipo Sanguineo", typeof(MyPages.TipoSanguineoController), icon: null)]