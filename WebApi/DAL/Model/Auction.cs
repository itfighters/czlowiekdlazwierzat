using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace DAL.Model
{
    [Table("Auctions")]
    public class Auction
    {
        [Key]
        public int Id { get; set; }

        [Required]
        [MaxLength(100)]
        public string Title { get; set; }

        [Required]
        [MaxLength(500)]
        public string Description { get; set; }

        public byte[] Image { get; set; }

        public IList<AuctionCategory> Categories { get; set; }

        [MaxLength(500)]
        public string DotpayLink { get; set; }
        [MaxLength(500)]
        public string SiepomagaLink { get; set; }

        [MaxLength(500)]
        public string PaypalLink { get; set; }


        public bool Account { get; set; }

        public bool Featured { get; set; }

        public  DateTime DateFrom { get; set; }

        public DateTime DateTo { get; set; }
        [MaxLength(500)]
        public string AddressFrom { get; set; }
        [MaxLength(500)]
        public  string AddressTo { get; set; }
        [Required]
        public  string ContactNumber { get; set; }

        public DateTime CreatedAt { get; set; }

        public  bool IsDeleted { get; set; }

    }
}
