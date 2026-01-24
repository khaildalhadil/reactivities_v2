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

    return Ok(new { length= activities.Count, Allactivities=activities});
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

  [HttpPost]
  public async Task<IActionResult> AddOneActivite(Activity activity)
  {
    if (activity == null) return BadRequest();

    await context.Activitys.AddAsync(activity);
    await context.SaveChangesAsync();
    return Created();
  }

  [HttpPut]
  public async Task<IActionResult> UpdateActiviteById(Activity activityWantToUpdated)
  {

    if (activityWantToUpdated == null) return BadRequest();

    Activity? currentActivity = await context.Activitys.FindAsync(activityWantToUpdated.Id);

    if (currentActivity == null) return NotFound(new {status="Fail", Message=$"User With Id {activityWantToUpdated.Id} Not Found"});

    currentActivity.Title = activityWantToUpdated.Title;
    currentActivity.Description = activityWantToUpdated.Description;
    currentActivity.Date = activityWantToUpdated.Date;
    currentActivity.Category = activityWantToUpdated.Category;
    currentActivity.IsCancelled = activityWantToUpdated.IsCancelled;
    currentActivity.City = activityWantToUpdated.City;
    currentActivity.Venue = activityWantToUpdated.Venue;
    currentActivity.Latitude = activityWantToUpdated.Latitude;
    currentActivity.Longitude = activityWantToUpdated.Longitude;

    context.Activitys.Update(currentActivity);
    await context.SaveChangesAsync();
    
    return Ok(new {status="Success", data = currentActivity});
  }

  [HttpDelete("{id}")]
  public async Task<IActionResult> DeleteActiviteById(string id)
  {

    if (id == null) return BadRequest();

    Activity? activityToDelete = await context.Activitys.FindAsync(id);

    if (activityToDelete == null) return NotFound(new {status="Fail", Message=$"User With Id {id} Not Found"});

    context.Activitys.Remove(activityToDelete);
    await context.SaveChangesAsync();
    return Ok(new {status="Success", Message=$"User With Id {id} Deleted Successfully"});
  }

}
