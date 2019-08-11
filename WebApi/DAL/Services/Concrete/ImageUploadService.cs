using DAL.Services.Abstract;
using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.IO;
using System.Text;
using System.Threading.Tasks;

namespace DAL.Services.Concrete
{
    public class ImageUploadService : IImageUploadService
    {
        public async Task<string> UploadImage(IFormFile file)
        {
            if (file != null && file.Length > 0)
            {
                var fileGuid = Guid.NewGuid();
                var fileName = Path.GetFileName($"{fileGuid}.{getFileFormat(file.ContentType)}");
                var filePath = Path.Combine(Directory.GetCurrentDirectory(), @"wwwroot\Images", fileName);
                using (var fileStream = new FileStream(filePath, FileMode.Create))
                {
                    await file.CopyToAsync(fileStream);
                }
                return fileName;
            }
            return null;
        }

        private string getFileFormat(string contentType)
        {
            if (contentType == "image/png")
            {
                return "png";
            }
            else
            {
                return "jpg";
            }
        }
    }
}
