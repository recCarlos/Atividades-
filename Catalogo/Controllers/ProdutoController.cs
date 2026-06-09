using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;

namespace SeuProjeto.Controllers
{
    public class ProdutoController : Controller
    {
        public IActionResult Index()
        {
            // Criando a lista com 5 nomes de produtos
            List<string> nomes = new List<string>
            {
                "Teclado Mecânico",
                "Mouse Óptico",
                "Monitor 24'",
                "Fone de Ouvido",
                "Mousepad Gamer"
            };

            // Criando a lista com os preços correspondentes
            List<double> precos = new List<double>
            {
                350.00,
                89.90, // < 100 (Ficará verde)
                899.00,
                120.00,
                45.50  // < 100 (Ficará verde)
            };

            // Passando ambas as listas via ViewBag
            ViewBag.NomesProdutos = nomes;
            ViewBag.PrecosProdutos = precos;

            return View();
        }
    }
}