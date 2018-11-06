using Serenity.Navigation;
using MyPages = HBIS.Paciente.Pages;

[assembly: NavigationMenu(int.MaxValue, "Paciente", icon: "fa-male")]
[assembly: NavigationLink(int.MaxValue, "Paciente/Paciente", typeof(MyPages.PacienteController), icon: "fa-heartbeat")]