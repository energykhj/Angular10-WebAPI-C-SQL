using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http.Headers;
using System.Web.Http;
using System.Web.Http.Cors;

namespace WebAPI
{
    public static class WebApiConfig
    {
        public static void Register(HttpConfiguration config)
        {        
            // Web API configuration and services

            // Web API routes
            config.MapHttpAttributeRoutes();

            config.Routes.MapHttpRoute(
                name: "DefaultApi",
                routeTemplate: "backend/{controller}/{id}",
                defaults: new { id = RouteParameter.Optional }
            );

            // add hko
            // for return anonymous type instead of the list of string type in controller
            config.Formatters.JsonFormatter.SupportedMediaTypes.Add(new MediaTypeHeaderValue("text/html"));

            #region Enable CORS
            // specific domain
            //config.EnableCors(new EnableCorsAttribute("http://google.com", "*", "*"));
            #endregion

            // enable CORS - all domain
            config.EnableCors(new EnableCorsAttribute("*", "*", "*"));
        }
    }
}
