
namespace HBIS.OLTP.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("OLTP/Medico"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.MedicoRow))]
    public class MedicoController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/OLTP/Medico/MedicoIndex.cshtml");
        }
    }
}