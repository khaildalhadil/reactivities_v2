using MediatR;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.CodeAnalysis.CSharp.Syntax;

namespace API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BaseApiController : ControllerBase
    {
        private IMediator? _mediator;

    
        protected IMediator Mediator => // اي شي انا مسجلنه بيجي
            _mediator ??= HttpContext.RequestServices.GetService<IMediator>()
                //يطلب من الـ DI: أعطني خدمة من نوع IMediator ↑↑↑↑↑↑
                ?? throw new InvalidCastException("Imediator service is unavailable");
    }
}
