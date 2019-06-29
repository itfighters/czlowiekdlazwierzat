using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore.Metadata.Internal;

namespace DAL.Model
{
    [Table("Subscription")]
    public class Subscription : ITimeStampedEntity
    {
        [Key]
        public Guid Id { get; set; }
        public string Contact { get; set; }
        public SubscriptionType SubscriptionType { get; set; }
        public IList<SubscriptionCategory> Categories { get; set; }
        public bool Subscribed { get; set; }
        public bool Confirmed { get; set; }
        public string ConfirmationToken { get; set; }
        public DateTime CreatedAt { get; set; }
        public DateTime UpdatedAt { get; set; }
    }
}
