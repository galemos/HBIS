using Serenity.Navigation;
using MyPages = HBIS.Exame.Pages;

[assembly: NavigationMenu(int.MaxValue, "Exame", icon: "fa-hospital-o")]
[assembly: NavigationLink(int.MaxValue, "Exame/Exame", typeof(MyPages.ExameController), icon: "fa-eyedropper")]