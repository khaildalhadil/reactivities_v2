
using DataAccess;
using Microsoft.EntityFrameworkCore;

public class DatabaseInitializer
{
  private readonly AppDbContext _context;
  private readonly ILogger<DatabaseInitializer> _logger;
  public DatabaseInitializer(AppDbContext context, ILogger<DatabaseInitializer> logger)
  {
    _context = context;
    _logger = logger;
  }
    
  public async Task InitializeAsync()
  {
    try
    {
      await _context.Database.MigrateAsync();
      await DbInitializer.SeedData(_context);
    } catch(Exception ex)
    {
      _logger.LogError(ex, "Error during database initialization");
      throw;
    }
  }
}