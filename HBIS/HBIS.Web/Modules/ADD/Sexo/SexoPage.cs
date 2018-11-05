
namespace HBIS.ADD.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("ADD/Sexo"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.SexoRow))]
    public class SexoController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/ADD/Sexo/SexoIndex.cshtml");
        }
    }
}