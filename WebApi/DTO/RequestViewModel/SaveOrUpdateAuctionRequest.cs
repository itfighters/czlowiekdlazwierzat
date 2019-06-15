using FluentValidation;
using System;
using System.Collections.Generic;

namespace DTO.RequestViewModel
{
    public class SaveOrUpdateAuctionRequest
    {
        public Guid? Id { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
        public byte[] Image { get; set; }
        public List<int> Categories { get; set; }
        public string DotpayLink { get; set; }
        public string SiepomagaLink { get; set; }
        public bool Account { get; set; }
        public DateTime DateFrom { get; set; }
        public DateTime DateTo { get; set; }
        public string AddressFrom { get; set; }
        public string AddressTo { get; set; }
        public string ContactNumber { get; set; }
    }

    public class AddAuctionRequestValidator : AbstractValidator<SaveOrUpdateAuctionRequest>
    {
        public AddAuctionRequestValidator()
        {
            RuleFor(x => x.Title).NotEmpty().Length(1, 250).WithMessage("Podaj tytuł");
            RuleFor(x => x.Description).NotEmpty().Length(1,500).WithMessage("Podaj opis");
        }
    }
}
