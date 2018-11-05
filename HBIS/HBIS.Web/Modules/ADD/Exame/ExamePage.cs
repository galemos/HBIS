
namespace HBIS.ADD.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("ADD/Exame"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.ExameRow))]
    public class ExameController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/ADD/Exame/ExameIndex.cshtml");
        }
    }
}