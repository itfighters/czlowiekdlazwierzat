using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace DAL.Model
{
    [Table("Auctions")]
    public class Auction : ITimeStampedEntity 
    {
        [Key]
        public int Id { get; set; }

        [Required]
        [MaxLength(300)]
        public string Title { get; set; }

        [MaxLength(500)]
        public string ShortDescription { get; set; }

        [Required]
        [MaxLength(1500)]
        public string Description { get; set; }

        public string Image { get; set; }

        public IList<AuctionCategory> Categories { get; set; }

        public string DotpayLink { get; set; }
        public string SiepomagaLink { get; set; }
        public string PaypalLink { get; set; }


        public bool Account { get; set; }

        public bool Featured { get; set; }

        public  DateTime DateFrom { get; set; }

        public DateTime DateTo { get; set; }
        public string AddressFrom { get; set; }
        public  string AddressTo { get; set; }
        public  string ContactNumber { get; set; }

        public  bool IsDeleted { get; set; }
        public DateTime CreatedAt { get; set; }
        public DateTime UpdatedAt { get; set; }

        public bool Publish { get; set; }
        public bool Dotpay { get; set; }
        public bool Paypall { get; set; }
    }
}
