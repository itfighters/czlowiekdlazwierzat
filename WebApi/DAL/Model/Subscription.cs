using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore.Metadata.Internal;

namespace DAL.Model
{
    [Table("Subscription")]
    public class Subscription
    {
        [Key]
        public Guid Id { get; set; }
        public string Contact { get; set; }

        public IList<SubscriptionCategory> Categories { get; set; }
        public bool Subscribed { get; set; }
        public bool Confirmed { get; set; }
        public string ConfirmationToken { get; set; }
    }
}
