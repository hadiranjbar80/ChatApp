
using Microsoft.AspNetCore.Http;

namespace Application.Core
{
    public class ImageUpload
    {
        public static string AddImage(IFormFile file)
        {
            try
            {
                if (file.Length > 0)
                {
                    var imageName = Guid.NewGuid().ToString() + file.ContentType.Split("/").Last();

                    var filePath = Path.Combine(Directory.GetCurrentDirectory(),
                        "wwwroot", "Upload", "Images", imageName);

                    using (var stream = new FileStream(filePath, FileMode.Create))
                    {
                        file.CopyTo(stream);
                    }

                    return imageName;
                }

                return null;
            }
            catch (Exception ex)
            {
                throw new ApplicationException($"Problem uploading image! {ex}");
            }
        }
    }
}