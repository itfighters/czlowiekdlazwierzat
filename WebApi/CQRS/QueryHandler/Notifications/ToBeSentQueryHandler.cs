using CQRS.Query.Notifications;
using DAL;
using DAL.Repositories.Abstract;
using MediatR;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading;
using System.Threading.Tasks;

namespace CQRS.QueryHandler.Notifications
{
    public class ToBeSentQueryHandler : IRequestHandler<ToBeSentQuery, int>
    {
        private readonly INotificationRepository notificationRepository;

        public ToBeSentQueryHandler(INotificationRepository notificationRepository) => this.notificationRepository = notificationRepository;

        public async Task<int> Handle(ToBeSentQuery request, CancellationToken cancellationToken) => await notificationRepository.ToBeSentCount(request.AuctionId, request.Type);
    }
}
