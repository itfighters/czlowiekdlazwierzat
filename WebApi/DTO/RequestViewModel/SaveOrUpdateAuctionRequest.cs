using FluentValidation;
using System;
using System.Collections.Generic;
using System.Linq;

namespace DTO.RequestViewModel
{
    public class SaveOrUpdateAuctionRequest
    {
        public int? Id { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
        public byte[] Image { get; set; }
        public List<int> Categories { get; set; }
        public string DotpayLink { get; set; }
        public string SiepomagaLink { get; set; }
        public bool Account { get; set; }
        public DateTime? DateFrom { get; set; }
        public DateTime? DateTo { get; set; }
        public string AddressFrom { get; set; }
        public string AddressTo { get; set; }
        public string ContactNumber { get; set; }
        public string PaypalLink { get; set; }
        public bool Featured { get; set; }
    }

    public class AddAuctionRequestValidator : AbstractValidator<SaveOrUpdateAuctionRequest>
    {
        public AddAuctionRequestValidator()
        {
            RuleFor(x => x.Title).NotEmpty().Length(1, 100);
            RuleFor(x => x.Description).NotEmpty().Length(1, 500);
            RuleFor(x => x.Categories).NotEmpty().Custom((arr, context) =>
            {
                if (arr.Any(x => x < 1))
                    context.AddFailure("Wrong category id (value should be between 1 and 6)");
            });
        }
    }

   
}
