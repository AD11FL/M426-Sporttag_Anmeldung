using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Web;

namespace M426.Models
{
    public class Auth
    {
        private string email { get; set; }
        private string password { get; set; }

        public void getAuth()
        {
            try
            {
                HttpClient client = new HttpClient();
                
            }
            catch (Exception)
            {

                throw;
            }
        }
        public Auth(string email, string password)
        {
            this.email = email;
            this.password = "wthsA7088:=klmOAFIBX3}#";
        }
    }
}