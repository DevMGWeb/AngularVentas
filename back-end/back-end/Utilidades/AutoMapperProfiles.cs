using AutoMapper;
using back_end.Entidades;
using NetTopologySuite.Geometries;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace back_end.Utilidades
{
    public class AutoMapperProfiles : Profile   
    {
        public AutoMapperProfiles(GeometryFactory geometryFactory)
        {
           

        }
    }
}
