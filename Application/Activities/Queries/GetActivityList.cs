using System;
using DataAccess;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Models;

namespace Application.Queries;

public class GetActivityList
{
  public class Query: IRequest<List<Activity>> {}

  public class Handelr(AppDbContext context) : IRequestHandler<Query, List<Activity>>
  {
    public async Task<List<Activity>> Handle(Query request, CancellationToken cancellationToken)
    {
      return await context.Activitys.ToListAsync(cancellationToken);
    }
  }
}
