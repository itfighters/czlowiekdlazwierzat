using System;
namespace DAL.Model
{
    public interface ITimeStampedEntity
    {
        DateTime CreatedAt { get; set; }

        DateTime UpdatedAt { get; set; }
    }
}
