using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace DAL.Model
{
    [Table("Notifications")]
    public class Notification : ITimeStampedEntity
    {
        [Key]
        public Guid Id { get; set; }

        [Required]
        public int AuctionId { get; set; }
        public Auction Auction { get; set; }

        [Required]
        public NotificationStatus Status { get; set; }

        [Required]
        public Guid SubscriptionId { get; set; }
        public Subscription Subscription { get; set; }
        public DateTime CreatedAt { get; set; }
        public DateTime UpdatedAt { get; set; }
    }

}
