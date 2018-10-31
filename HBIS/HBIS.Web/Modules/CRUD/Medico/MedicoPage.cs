
namespace HBIS.CRUD.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("CRUD/Medico"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.MedicoRow))]
    public class MedicoController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/CRUD/Medico/MedicoIndex.cshtml");
        }
    }
}