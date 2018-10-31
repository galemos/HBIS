using Serenity.Navigation;
using MyPages = HBIS.CRUD.Pages;

[assembly: NavigationLink(int.MaxValue, "CRUD/Exame", typeof(MyPages.ExameController), icon: null)]
[assembly: NavigationLink(int.MaxValue, "CRUD/Exame Descicao", typeof(MyPages.ExameDescicaoController), icon: null)]
[assembly: NavigationLink(int.MaxValue, "CRUD/Historico", typeof(MyPages.HistoricoController), icon: null)]
[assembly: NavigationLink(int.MaxValue, "CRUD/Medico", typeof(MyPages.MedicoController), icon: null)]
[assembly: NavigationLink(int.MaxValue, "CRUD/Paciente", typeof(MyPages.PacienteController), icon: null)]
[assembly: NavigationLink(int.MaxValue, "CRUD/Sexo", typeof(MyPages.SexoController), icon: null)]
[assembly: NavigationLink(int.MaxValue, "CRUD/Tipo Sanguineo", typeof(MyPages.TipoSanguineoController), icon: null)]