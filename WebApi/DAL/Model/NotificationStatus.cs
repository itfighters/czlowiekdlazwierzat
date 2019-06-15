using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace DAL.Model
{
    [Table("NotificationStatuses")]
    public class NotificationStatus
    {
        [Key]
        public Guid Id { get; set; }
        
        public int Status { get; set; }

        [Required]
        public DateTime Timestamp { get; set; }

        public Notification Notification { get; set; }

        [Required]
        public Guid NotificationId { get; set; }
    }
}
