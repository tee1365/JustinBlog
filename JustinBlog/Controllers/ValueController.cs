using System.Collections.Generic;
using System.Threading.Tasks;
using Domain;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Persistence;

namespace JustinBlog.Controllers {
    [Route ("api/[controller]")]
    [ApiController]
    public class ValueController : ControllerBase {
        private readonly DataContext _context;
        public ValueController (DataContext context) {
            this._context = context;
        }

        [HttpGet]
        public async Task<ActionResult<ICollection<Value>>> GetValues () {
            var values = await _context.Values.ToListAsync ();
            return Ok (values);
        }

        [HttpGet ("{id}")]
        public async Task<ActionResult<Value>> GetValue (int id) {
            var value = await _context.Values.FindAsync (id);
            return Ok (value);
        }
    }
}