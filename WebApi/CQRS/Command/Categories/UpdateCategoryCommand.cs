using System;
using System.Collections.Generic;
using System.Text;
using FluentValidation;
using MediatR;

namespace CQRS.Command.Categories
{
    public class UpdateCategoryCommand: BaseCategoryCommand, IRequest
    {
        public int Id { get; set; }
    }

    public class UpdateCategoryCommandValidator : AbstractValidator<AddCategoryCommand>
    {
        public UpdateCategoryCommandValidator()
        {
            RuleFor(x => x.Name).NotEmpty().Length(1, 100);
        }
    }
}
