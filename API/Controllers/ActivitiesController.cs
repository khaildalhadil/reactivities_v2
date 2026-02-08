using System;
using Application.Activities.Commans;
using Application.Activities.Queries;
using Application.Queries;
using DataAccess;
using MediatR;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Models;

namespace API.Controllers;

public class ActivitiesController: BaseApiController
{
  
  [HttpGet]
  public async Task<IActionResult> GetAllActivites()
  {
    List<Activity> activities = await Mediator.Send(new GetActivityList.Query());

    if (activities == null || activities.Count == 0)
    {
      return NotFound();
    }

    return Ok(activities);
  }

  [HttpGet("{id}")]
  public async Task<IActionResult> GetOneActiviteById(string id)
  {

    return Ok(await Mediator .Send(new GetActivitieById.Query{Id = id}));

  }

  [HttpPost]
  public async Task<IActionResult> AddOneActivite(Activity activity)
  {
    if (activity == null) return BadRequest();

    string id = await Mediator.Send(new CreateActvitiy.Comman{Activity = activity});
    
    return Created();
  }

  [HttpPut]
  public async Task<IActionResult> UpdateActiviteById(Activity activityWantToUpdated)
  {
    if (activityWantToUpdated == null) return BadRequest();
    await Mediator.Send(new EditActivite.Comman{Id = activityWantToUpdated.Id, Activity = activityWantToUpdated});
    return NoContent();
  }

  [HttpDelete("{id}")]
  public async Task<IActionResult> DeleteActiviteById(string id)
  {
    if (id == null) return BadRequest();
    await Mediator.Send(new DeleteActivity.Comman{Id = id});
    return Ok(new {status="Success", Message=$"User With Id {id} Deleted Successfully"});
  }

}
