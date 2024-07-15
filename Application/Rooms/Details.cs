using Application.Core;
using Domain;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Persistence;

namespace Application.Rooms
{
    public class Details
    {
        public class Query : IRequest<Result<Room>>
        {
            public Guid Id { get; set; }
        }

        public class Handler : IRequestHandler<Query, Result<Room>>
        {
            private readonly DataContext _context;
            public Handler(DataContext context)
            {
                _context = context;
            }

            public async Task<Result<Room>> Handle(Query request, CancellationToken cancellationToken)
            {
                return Result<Room>.Success(await _context.Rooms.SingleOrDefaultAsync(x=>x.Id == request.Id));
            }
        }
    }
}