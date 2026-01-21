using System;
using Microsoft.EntityFrameworkCore;
using Models;

namespace DataAccess;

public class AppDbContext(DbContextOptions<AppDbContext> options): DbContext(options)
{
  public DbSet<Activity> Activitys { get; set; }

  

}
