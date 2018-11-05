
namespace HBIS.ADD.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("ADD/ExameDescicao"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.ExameDescicaoRow))]
    public class ExameDescicaoController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/ADD/ExameDescicao/ExameDescicaoIndex.cshtml");
        }
    }
}