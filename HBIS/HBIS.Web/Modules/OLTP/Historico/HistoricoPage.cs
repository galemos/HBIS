
namespace HBIS.OLTP.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("OLTP/Historico"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.HistoricoRow))]
    public class HistoricoController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/OLTP/Historico/HistoricoIndex.cshtml");
        }
    }
}