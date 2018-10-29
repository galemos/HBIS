
namespace HBI.OLTP.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("OLTP/Exame"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.ExameRow))]
    public class ExameController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/OLTP/Exame/ExameIndex.cshtml");
        }
    }
}