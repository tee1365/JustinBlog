using System.Collections.Generic;
using System.Threading.Tasks;
using Application.ValueService;
using Domain;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Persistence;

namespace JustinBlog.Controllers {
    public class ValueController : BaseController {
        private readonly DataContext _context;
        private readonly IValueService _valueService;
        public ValueController (DataContext context, IValueService valueService) {
            this._valueService = valueService;
            this._context = context;
        }

        /// <summary>
        /// Deletes a specific TodoItem.
        /// </summary>
        [HttpGet]
        public async Task<ActionResult<ICollection<Value>>> GetValues () {
            return await _valueService.GetValues ();
        }

        [HttpGet ("{id}")]
        public async Task<ActionResult<Value>> GetValue (int id) {
            return await _valueService.GetValue (id);
        }
    }
}