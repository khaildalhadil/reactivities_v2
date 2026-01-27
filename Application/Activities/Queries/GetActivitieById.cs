using System;
using DataAccess;
using MediatR;
using Models;

namespace Application.Activities.Queries;

public class GetActivitieById
{

  public class Query: IRequest<Activity>
  {
    public required string Id { get; set; }
  }

  public class Handelr(AppDbContext context) : IRequestHandler<Query, Activity>
  {
    public async Task<Activity> Handle(Query request, CancellationToken cancellationToken)
    {
      var activity = await context.Activitys.FindAsync([request.Id], cancellationToken);
      
      if (activity == null) throw new Exception("Activity Not Found");

      return activity;
    }
  }

}
