
namespace HBIS.CRUD.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("CRUD/Exame"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.ExameRow))]
    public class ExameController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/CRUD/Exame/ExameIndex.cshtml");
        }
    }
}