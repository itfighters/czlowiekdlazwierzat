using System.ComponentModel.DataAnnotations;

namespace DAL.Model
{
    public class AuctionCategory
    {
        [Key]
        public int Id { get; set; }

        [Required]
        public int AuctionId { get; set; }

        public Auction  Auction { get; set; }

        [Required]
        public int CategoryId { get; set; }

        public Category Category { get; set; }
    }
}
