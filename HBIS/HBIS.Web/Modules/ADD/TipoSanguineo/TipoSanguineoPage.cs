
namespace HBIS.ADD.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("ADD/TipoSanguineo"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.TipoSanguineoRow))]
    public class TipoSanguineoController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/ADD/TipoSanguineo/TipoSanguineoIndex.cshtml");
        }
    }
}