using Application.Common;
using Application.Queries;
using DataAccess;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddScoped<DatabaseInitializer>();

builder.Services.AddControllers();

builder.Services.AddDbContext<AppDbContext>(
    options=> options.UseSqlite(
        builder.Configuration.GetConnectionString("Default")
        )
    );


// add cors

builder.Services.AddCors();

builder.Services.AddMediatR(x=> x.RegisterServicesFromAssemblyContaining<GetActivityList.Handelr>());
builder.Services.AddAutoMapper(typeof(MappingProfiles).Assembly); // or typeof(Program).Assembly

var app = builder.Build();

app.UseCors(options => options.AllowAnyHeader().AllowAnyMethod().WithOrigins("http://localhost:3000","https://localhost:3000"));

app.MapControllers();

// Create a scope because the used services are scoped
using var scope = app.Services.CreateScope();

// Resolve DatabaseInitializer from Dependency Injection
var init = scope.ServiceProvider.GetRequiredService<DatabaseInitializer>();

// Run migrations and seed initial data
await init.InitializeAsync();

app.Run();
