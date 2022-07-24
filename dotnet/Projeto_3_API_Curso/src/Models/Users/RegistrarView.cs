using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;

namespace Projeto_3_API_Curso.src.Models.Users
{
    public class RegistrarView
    {
        [Required(ErrorMessage = "O campo é obrigatorio")]
        public string Login { get; set; }

        [Required(ErrorMessage = "O campo é obrigatorio")]
        public string Email { get; set; }

        [Required(ErrorMessage = "O campo é obrigatorio")]
        public string Senha { get; set; }    
    }
}