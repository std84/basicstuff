using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;



using Microsoft.EntityFrameworkCore;
using System.Data;

namespace rephael.ClientApp.src.app.data
{
    [Route("api/[controller]")]
    [ApiController]
    public class upload : ControllerBase
    {
        [HttpPost]
        public async Task<IActionResult> UploadFile(IFormFile file)
        {
            if (file == null || file.Length == 0)
                return Ok("file not selected");
            var filePath = Path.Combine(
            Directory.GetCurrentDirectory(), "TempUpload");

            if (!Directory.Exists(filePath))
            {
                Directory.CreateDirectory(filePath);
            }

            var fileUniqueId = Guid.NewGuid().ToString().ToLower().Replace("-", string.Empty);
            var uniqueFileName = $"{fileUniqueId}_{file.FileName}";

            using (var fileStream = new FileStream(Path.Combine(filePath, uniqueFileName), FileMode.Create))
            {
                await file.CopyToAsync(fileStream);
            }

            var result = new
            {
                UploadFileName = uniqueFileName
            };

            return new JsonResult(result);
        }
    }
}


