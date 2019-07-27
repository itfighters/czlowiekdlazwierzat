using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace DAL.Model
{
    [Table("Images")]
    public class Image
    {
        [Key]
        public int Id { get; set; }

        [Required]
        public string Source { get; set; }
    }
}
