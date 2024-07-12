using Application.Rooms;
using Domain;
using MediatR;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Persistence;

namespace API.Controllers
{
    public class RoomsController : BaseApiController
    {

        [HttpGet]
        public async Task<ActionResult<List<Room>>> GetRooms()
        {
            return await Mediator.Send(new List.Query());
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Room>> GetRoom(Guid id)
        {
            return Ok(await Mediator.Send(new Details.Query { Id = id }));
        }

        [HttpPost]
        public async Task<ActionResult> CreateRoom(Room room)
        {
            return Ok(await Mediator.Send(new Create.Command { Room = room }));
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> EditRoom(Guid id, Room room)
        {
            room.Id = id;
            return Ok(await Mediator.Send(new Edit.Command { Room = room }));
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteRoom(Guid id)
        {
            return Ok(await Mediator.Send(new Delete.Command { Id = id }));
        }
    }
}