
using System.Collections;
using System.Collections.Generic;
namespace weather
{
public class WeatherResponse
{
    public string Name { get; set; }
 
    public IEnumerable<Description> Weather { get; set; }
 
    public Main Main { get; set; }
}
 

}
