
namespace HBIS.CRUD.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("CRUD/Sexo"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.SexoRow))]
    public class SexoController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/CRUD/Sexo/SexoIndex.cshtml");
        }
    }
}