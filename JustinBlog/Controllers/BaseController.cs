using Microsoft.AspNetCore.Mvc;

namespace JustinBlog.Controllers {
    [Route ("api/[controller]")]
    [ApiController]
    [Produces ("application/json")]
    public class BaseController : ControllerBase {

    }
}