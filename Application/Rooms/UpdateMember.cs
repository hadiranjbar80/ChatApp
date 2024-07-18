using Application.Core;
using Application.Interfaces;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Persistence;

namespace Application.Rooms
{
    public class UpdateMember
    {
        public class Command : IRequest<Result<Unit>>
        {
            public Guid Id { get; set; }
        }

        public class Handler : IRequestHandler<Command, Result<Unit>>
        {
            private readonly DataContext _context;
            private readonly IUserAccessor _userAccessor;
            public Handler(DataContext context, IUserAccessor userAccessor)
            {
                _userAccessor = userAccessor;
                _context = context;
            }

            public async Task<Result<Unit>> Handle(Command request, CancellationToken cancellationToken)
            {
                var room = await _context.Rooms
                    .Include(x => x.RoomMembers).ThenInclude(x => x.AppUser)
                    .SingleOrDefaultAsync(x => x.Id == request.Id);

                if (room == null) return null;

                var user = await _context.Users.FirstOrDefaultAsync
                    (x => x.UserName == _userAccessor.GetUsername());

                if (user == null) return null;

                var ownerUsername = room.RoomMembers.FirstOrDefault(x => x.IsOwner)?.AppUser.UserName;

                var member = room.RoomMembers.FirstOrDefault(x => x.AppUser.UserName == user.UserName);

                if (member != null && ownerUsername == user.UserName)
                {
                    _context.Remove(room);
                }

                if (member != null && ownerUsername != user.UserName)
                    room.RoomMembers.Remove(member);

                if (member == null)
                {
                    member = new Domain.RoomMember
                    {
                        AppUser = user,
                        Room = room,
                        IsOwner = false
                    };

                    room.RoomMembers.Add(member);
                }

                var result = await _context.SaveChangesAsync() > 0;

                return result ? Result<Unit>.Success(Unit.Value) : Result<Unit>.Failure("Problem joining room");
            }
        }
    }
}