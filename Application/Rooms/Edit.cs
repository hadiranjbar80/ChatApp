using AutoMapper;
using Domain;
using MediatR;
using Persistence;

namespace Application.Rooms
{
    public class Edit
    {
        public class Command : IRequest<Unit>
        {
            public Room Room { get; set; }
        }

        public class Handler : IRequestHandler<Command, Unit>
        {
            private readonly DataContext _context;
            private readonly IMapper _mapper;
            public Handler(DataContext context, IMapper mapper)
            {
                _mapper = mapper;
                _context = context;
            }

            public async Task<Unit> Handle(Command request, CancellationToken cancellationToken)
            {
                var room = await _context.Rooms.FindAsync(request.Room.Id);

                _mapper.Map(request.Room, room);

                await _context.SaveChangesAsync();

                return Unit.Value;
            }
        }
    }
}