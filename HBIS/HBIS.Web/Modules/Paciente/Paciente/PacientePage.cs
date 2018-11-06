
namespace HBIS.Paciente.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Paciente/Paciente"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.PacienteRow))]
    public class PacienteController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Paciente/Paciente/PacienteIndex.cshtml");
        }
    }
}