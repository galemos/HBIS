
namespace HBIS.ADD.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("ADD/Paciente"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.PacienteRow))]
    public class PacienteController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/ADD/Paciente/PacienteIndex.cshtml");
        }
    }
}