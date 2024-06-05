using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Threading.Tasks;

namespace ProjectPages
{
    public class Response
    {
        public HttpStatusCode status { get; set; }
        public string message { get; set; }
        public object data { get; set; }
    }

    public class parameter
    {
        public string JsonData { get; set; }
    }
}
