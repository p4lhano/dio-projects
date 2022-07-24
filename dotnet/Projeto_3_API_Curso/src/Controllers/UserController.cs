using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Projeto_3_API_Curso.src.Models.Users;
using Swashbuckle.AspNetCore.Annotations;

namespace Projeto_3_API_Curso.src.Controllers
{
    [Route("api/[controller]")]
    public class UserController : Controller
    {
        [SwaggerResponse(statusCode: 200,description: "Sucesso ao logar",type: typeof(LoginView))]
        [SwaggerResponse(statusCode: 400,description: "Campos obrigatorios")]
        [SwaggerResponse(statusCode: 500,description: "Erro interno")]
        [HttpPost]
        [Route("login")]
        public IActionResult RealizarLogin([FromBody]LoginView login){
            Console.WriteLine($"Logado:{login.Login}");
            return Ok(login);
        }

        [HttpPost]
        [Route("registrar")]
        public IActionResult RealizarCadastro([FromBody]RegistrarView registrarView){
            return Created("Criado",registrarView);
        }

        // private readonly ILogger<UserController> _logger;

        // public UserController(ILogger<UserController> logger) {
        //     _logger = logger;
        // }

        // public IActionResult Index() {
        //     return View();
        // }

        // [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        // public IActionResult Error() {
        //     return View("Error!");
        // }
    }
}