using Domain;
using FluentValidation;

namespace Application.Rooms
{
    public class RoomValidator :AbstractValidator<Room>
    {
        public RoomValidator()
        {
            RuleFor(x=>x.Title).NotEmpty();
            RuleFor(x=>x.Capacity).NotEmpty();
            RuleFor(x=>x.Type).NotEmpty();
            RuleFor(x=>x.Description).NotEmpty();
        }
    }
}