using System.Collections.Generic;
using System.Threading.Tasks;
using Domain;
using Microsoft.AspNetCore.Mvc;

namespace Application.ValueService {
    public interface IValueService {
        Task<ActionResult<ICollection<Value>>> GetValues ();
        Task<ActionResult<Value>> GetValue (int id);
    }
}