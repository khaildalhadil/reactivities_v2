using System;
using DataAccess;
using MediatR;

namespace Application.Activities.Commans;

public class DeleteActivity
{
  public class Comman: IRequest<string>
  {
    public required string Id{ get; set; }
  }

  public class Handler(AppDbContext context) : IRequestHandler<Comman, string>
  {
    public async Task<string> Handle(Comman request, CancellationToken cancellationToken)
    {

      var activity = await context.Activitys.FindAsync([request.Id], cancellationToken);
      
      if (activity == null) throw new Exception("Activity Not Found");

      context.Activitys.Remove(activity);
      await context.SaveChangesAsync(cancellationToken);

      return activity.Id;
    }
  }
}
