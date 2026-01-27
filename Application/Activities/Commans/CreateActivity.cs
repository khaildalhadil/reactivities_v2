using System;
using DataAccess;
using MediatR;
using Models;

namespace Application.Activities.Commans;

public class CreateActvitiy
{
  public class Comman: IRequest<string>
  {
    public required Activity Activity { get; set; }
    
  }

  public class Handelr(AppDbContext context) : IRequestHandler<Comman, string>
  {
    public async Task<string> Handle(Comman request, CancellationToken cancellationToken)
    {
      context.Activitys.Add(request.Activity);
      // cancellationToken = لا تكمّل شغل إذا الطلب مات
      await context.SaveChangesAsync(cancellationToken);
      
      return request.Activity.Id;
    }
  }
}
