using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Web.UI;

namespace M426.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult About()
        {
            ViewBag.Message = "Your application description page.";

            return View();
        }

        public ActionResult Contact()
        {
            ViewBag.Message = "Your contact page.";

            return View();
        }

        public ActionResult Schueler()
        {
            ViewBag.Message = "Das ist die Seite für die Schüler";

            return View();
        }

        public ActionResult Schueler_Informationen()
        {
            ViewBag.Message = "Das ist die Informationsseite für die Schüler";

            return View();
        }

        public ActionResult Lehrer()
        {
            ViewBag.Message = "Das ist die Seite für die Lehrer";

            return View();
        }

        public ActionResult Lehrer_Informationen()
        {
            ViewBag.Message = "Das ist die Informationsseite für die Lehrer";

            return View();
        }

        public ActionResult Login()
        {
            ViewBag.Message = "Das ist eine Testseite";

            return View();
        }
        public ActionResult Auth()
        {

            return Redirect("https://login.microsoftonline.com/organizations/oauth2/v2.0/authorize?client_id = 09a5af04-aab6-447b-83f3-7299552f70c5& response_type = code& redirect_uri = http://localhost:64485/Home/Login& response_mode = query& scope = offline_access user.read mail.read& state = 12345");
        }
    }
}