using back_end.Entidades;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace back_end.Controllers
{
    [Route("api/empresa")]
    [ApiController]
    public class EmpresasController : ControllerBase
    {
        private readonly ILogger<EmpresasController> logger;
        private readonly ApplicationDbContext context;

        public EmpresasController(ILogger<EmpresasController> logger,
            ApplicationDbContext context)
        {
            this.logger = logger;
            this.context = context;
        }

        [HttpGet]
        public async Task<ActionResult<List<Empresa>>> Get()
        {
            var empresas = await context.Empresas.ToListAsync();
            return empresas;
        }

        [HttpGet("{Id:int}")]
        public async Task<ActionResult<Empresa>> GetByIdAsync(int Id)
        {
            var empresa = await context.Empresas.FirstOrDefaultAsync(x => x.Id == Id);

            if (empresa == null)
            {
                return NotFound();
            }

            return Ok(empresa);
        }

        [HttpPost]
        public async Task<ActionResult<Empresa>> Post([FromBody] Empresa empresa)
        {
            context.Empresas.Add(empresa);
            await context.SaveChangesAsync();

            return NoContent();
        }

        [HttpPut]
        public ActionResult<List<Empresa>> Put([FromBody] Empresa empresa)
        {
            throw new NotImplementedException();
        }

        [HttpDelete("{Id:int}")]
        public ActionResult<List<Empresa>> Delete(int Id)
        {
            throw new NotImplementedException();
        }
    }
}
