
namespace HBIS.CRUD.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("CRUD/Paciente"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.PacienteRow))]
    public class PacienteController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/CRUD/Paciente/PacienteIndex.cshtml");
        }
    }
}