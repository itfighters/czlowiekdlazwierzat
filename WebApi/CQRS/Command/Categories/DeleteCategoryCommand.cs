using System;
using System.Collections.Generic;
using System.Text;
using FluentValidation;
using MediatR;

namespace CQRS.Command.Categories
{
    public class DeleteCategoryCommand : IRequest
    {
        public int Id { get; set; }
    }

    public class DeleteCategoryCommandValidator : AbstractValidator<DeleteCategoryCommand>
    {
        public DeleteCategoryCommandValidator()
        {
            RuleFor(x => x.Id).NotEmpty();
        }
    }
}
