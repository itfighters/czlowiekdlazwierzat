using FluentValidation;
using System;

namespace DTO.RequestViewModel
{
    public class AddAuctionRequest
    {
        public Guid? Id { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
    }

    public class AddAuctionRequestValidator : AbstractValidator<AddAuctionRequest>
    {
        public AddAuctionRequestValidator()
        {
            RuleFor(x => x.Title).NotEmpty().Length(1, 250).WithMessage("Podaj tytuł");
            RuleFor(x => x.Description).NotEmpty().Length(1,500).WithMessage("Podaj opis");
        }
    }
}
