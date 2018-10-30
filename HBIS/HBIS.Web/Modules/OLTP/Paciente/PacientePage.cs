
namespace HBIS.OLTP.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("OLTP/Paciente"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.PacienteRow))]
    public class PacienteController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/OLTP/Paciente/PacienteIndex.cshtml");
        }
    }
}