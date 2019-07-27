using System;
using System.Collections.Generic;
using System.Text;
using FluentValidation;
using MediatR;

namespace CQRS.Command.Categories
{
    public class AddCategoryCommand : BaseCategoryCommand, IRequest
    {
    }

    public class AddCategoryCommandValidator : AbstractValidator<AddCategoryCommand>
    {
        public AddCategoryCommandValidator()
        {
            RuleFor(x => x.Name).NotEmpty().Length(1, 100);
        }
    }
}
