
namespace HBIS.ADD.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("ADD/Historico"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.HistoricoRow))]
    public class HistoricoController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/ADD/Historico/HistoricoIndex.cshtml");
        }
    }
}