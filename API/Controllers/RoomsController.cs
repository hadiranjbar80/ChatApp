using Application.Rooms;
using Domain;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    public class RoomsController : BaseApiController
    {

        [HttpGet]
        public async Task<IActionResult> GetRooms()
        {
            return HandleResult(await Mediator.Send(new List.Query()));
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Room>> GetRoom(Guid id)
        {
            return HandleResult(await Mediator.Send(new Details.Query { Id = id }));
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
            return HandleResult(await Mediator.Send(new Delete.Command { Id = id }));
        }

        [HttpPost("{id}/join")]
        public async Task<IActionResult> Join(Guid id)
        {
            return HandleResult(await Mediator.Send(new UpdateMember.Command { Id = id }));
        }
    }
}