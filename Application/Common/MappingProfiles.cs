using System;
using AutoMapper;
using Models;

namespace Application.Common;

public class MappingProfiles: Profile
{
  public MappingProfiles()
  {
    CreateMap<Activity, Activity>();
  }
}
