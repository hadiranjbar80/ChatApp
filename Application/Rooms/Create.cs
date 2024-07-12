using Domain;
using MediatR;
using Persistence;

namespace Application.Rooms
{
    public class Create
    {
        public class Command : IRequest<Unit>
        {
            public Room Room { get; set; }
        }

        public class Handler : IRequestHandler<Command, Unit>
        {
            private readonly DataContext _context;
            public Handler(DataContext context)
            {
                _context = context;
            }

            public async Task<Unit> Handle(Command request, CancellationToken cancellationToken)
            {
                _context.Rooms.Add(request.Room);

                var result = await _context.SaveChangesAsync() > 0;

                if(!result) return Unit.Value;

                return Unit.Value;

            }
        }
    }
}