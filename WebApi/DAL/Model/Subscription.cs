using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;
using Microsoft.EntityFrameworkCore.Metadata.Internal;

namespace DAL.Model
{
    [Table("Subscription")]
    public class Subscription
    {
        [Key]
        public Guid Id { get; set; }
        public string Email { get; set; }
        public string Phone { get; set; }

        [Required]
        public DateTime Timestamp { get; set; }

        public Category Category { get; set; }

        [Required]
        public int CategoryId { get; set; }

    }
}
