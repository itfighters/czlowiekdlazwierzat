using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace DAL.Model
{
    public class SubscriptionCategory
    {
        [Key]
        public int Id { get; set; }

        [Required]
        public Guid SubscriptionId { get; set; }

        public Subscription Subscription { get; set; }

        [Required]
        public int CategoryId { get; set; }

        public Category Category { get; set; }
    }
}
