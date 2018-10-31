
namespace HBIS.CRUD.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("CRUD/TipoSanguineo"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.TipoSanguineoRow))]
    public class TipoSanguineoController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/CRUD/TipoSanguineo/TipoSanguineoIndex.cshtml");
        }
    }
}