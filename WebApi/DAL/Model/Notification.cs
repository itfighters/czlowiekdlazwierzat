using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace DAL.Model
{
    [Table("Notifications")]
    public class Notification
    {
        [Key]
        public Guid Id { get; set; }
        public string Email { get; set; }
        public string Phone { get; set; }

        [Required]
        public DateTime Timestamp { get; set; }

        public Auction Auction { get; set; }

        [Required]
        public int AuctionId { get; set; }
    }
}
