
namespace HBIS.ADD.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("ADD/Medico"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.MedicoRow))]
    public class MedicoController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/ADD/Medico/MedicoIndex.cshtml");
        }
    }
}