using System;
using DataAccess;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Models;

namespace API.Controllers;

public class ActivitiesController(AppDbContext context): BaseApiController
{
  
  [HttpGet]
  public async Task<IActionResult> GetAllActivites()
  {
    List<Activity> activities = await context.Activitys.ToListAsync();

    if (activities == null)
    {
      return NotFound();
    }

    return Ok(activities);
  }

  [HttpGet("{id}")]
  public async Task<IActionResult> GetOneActiviteById(string id)
  {

    Activity? activite = await context.Activitys.FindAsync(id);

    if (activite == null)
    {
      return NotFound(new {status = "Not Found", Message = $"Activite With Id {id} Not Found"});
    }

    return Ok(activite);

  }

}
