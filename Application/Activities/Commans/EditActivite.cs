using System;
using AutoMapper;
using DataAccess;
using MediatR;
using Models;

namespace Application.Activities.Commans;

public class EditActivite
{
  public class Comman: IRequest
  {
    public required string Id { get; set; }
    public required Activity Activity { get; set; }
  }

  public class Handler(AppDbContext context, IMapper mapper) : IRequestHandler<Comman>
  {
    public async Task Handle(Comman request, CancellationToken cancellationToken)
    {
      var activity = 
        await context.Activitys.FindAsync([request.Id], cancellationToken) 
          ?? throw new Exception($"Activity With Id {request.Id} Not Found");

      // if (activity == null) 
      // activity.Title = request.Activity.Title;
      // activity.Description = request.Activity.Description;
      // activity.Date = request.Activity.Date;
      // activity.Category = request.Activity.Category;
      // activity.IsCancelled = request.Activity.IsCancelled;
      // activity.City = request.Activity.City;
      // activity.Venue = request.Activity.Venue;
      // activity.Latitude = request.Activity.Latitude;
      // activity.Longitude = request.Activity.Longitude;

      mapper.Map(request.Activity, activity);

      context.Activitys.Update(activity);
      await context.SaveChangesAsync(cancellationToken);
    }
  }
}
