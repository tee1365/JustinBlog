using System.Collections.Generic;
using System.Threading.Tasks;
using Domain;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Persistence;

namespace Application.ValueService {
    public class ValueService : IValueService {
        private readonly DataContext _context;
        public ValueService (DataContext context) {
            this._context = context;
        }

        public async Task<ActionResult<Value>> GetValue (int id) {
            var value = await _context.Values.FindAsync (id);
            return value;
        }

        public async Task<ActionResult<ICollection<Value>>> GetValues () {
            var values = await _context.Values.ToListAsync ();
            return values;
        }
    }
}