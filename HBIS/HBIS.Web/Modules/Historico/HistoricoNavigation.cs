using Serenity.Navigation;
using MyPages = HBIS.Historico.Pages;

[assembly: NavigationMenu(int.MaxValue, "Historico", icon: "fa-pencil-square-o")]
[assembly: NavigationLink(int.MaxValue, "Historico/Historico", typeof(MyPages.HistoricoController), icon: "fa-stethoscope")]