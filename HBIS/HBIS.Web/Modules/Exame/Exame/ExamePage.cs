
namespace HBIS.Exame.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Exame/Exame"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.ExameRow))]
    public class ExameController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Exame/Exame/ExameIndex.cshtml");
        }
    }
}