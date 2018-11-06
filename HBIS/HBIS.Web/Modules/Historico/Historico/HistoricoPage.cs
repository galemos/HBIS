
namespace HBIS.Historico.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Historico/Historico"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.HistoricoRow))]
    public class HistoricoController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Historico/Historico/HistoricoIndex.cshtml");
        }
    }
}