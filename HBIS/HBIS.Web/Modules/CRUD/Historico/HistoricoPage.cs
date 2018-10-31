
namespace HBIS.CRUD.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("CRUD/Historico"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.HistoricoRow))]
    public class HistoricoController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/CRUD/Historico/HistoricoIndex.cshtml");
        }
    }
}