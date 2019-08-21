using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using vega.Controllers.Resources;
using vega.Models;

namespace vega.Controllers
{
    // Generic route for the entire controller
    [Route("/api/vehicles")]
    public class VehiclesController : Controller
    {
        private readonly IMapper mapper;

        public VehiclesController(IMapper mapper)
        {
            this.mapper = mapper;
        }

        // Temporary passing domain class !
        [HttpPost]
        public IActionResult CreateVehicle([FromBody]VehicleResource vehicleResource) 
        {
            var vehicle = mapper.Map<VehicleResource, Vehicle>(vehicleResource);
            return Ok(vehicle);
        }
    }
}