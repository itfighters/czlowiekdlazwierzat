using Microsoft.AspNetCore.Http;
using System.Threading.Tasks;

namespace DAL.Services.Abstract
{
    public interface IImageUploadService
    {
        Task<string> UploadImage(IFormFile file);
    }
}
