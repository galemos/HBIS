
namespace HBIS.CRUD.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("CRUD/ExameDescicao"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.ExameDescicaoRow))]
    public class ExameDescicaoController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/CRUD/ExameDescicao/ExameDescicaoIndex.cshtml");
        }
    }
}