using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using System.Net.Http;
using Newtonsoft.Json;

namespace weather.Controllers
{
    [Route("api/[controller]")]
    public class WeatherController : Controller
    {
        [HttpGet("[action]/{city}")]
        public async Task<IActionResult> WeatherForecast(string city)
        {
            using (var client = new HttpClient())
            {
                try
                {
                    client.BaseAddress = new Uri("http://api.openweathermap.org");
                    var response = await client.GetAsync($"/data/2.5/weather?q={city}&appid=ce912bece7a6b884bcc42220fac91dea&units=metric");
                    response.EnsureSuccessStatusCode();

                    var stringResult = await response.Content.ReadAsStringAsync();
                    var openWeather = JsonConvert.DeserializeObject<WeatherResponse>(stringResult);

                    var forecast = new
                    {
                        Temp = openWeather.Main.Temp,
                        Summary = string.Join(",", openWeather.Weather.Select(x => x.Main)),
                        City = openWeather.Name
                    };

                    return Ok(forecast);
                }
                catch (HttpRequestException httpRequestException)
                {
                    return BadRequest($"Error getting weather from OpenWeather: {httpRequestException.Message}");
                }
            }
        }







    }
}
