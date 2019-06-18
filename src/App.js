import React from "react";
import Info from "./components/info";
import Form from "./components/form";
import Weather from "./components/weather";

const API_KEY= '5e0051daeb5db477d9ed9cc45b16aaf5';

class App extends React.Component{

  state = {
    temp: undefined,
    city: undefined,
    country: undefined,
    sunrise: undefined,
    sunset: undefined,
    error: undefined
  }

  gettingWeather= async (e) => {
    e.preventDefault();
    const city=e.target.elements.city.value;



    if(city){
      const api_url = await
      fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
      const data = await api_url.json();

      console.log(data);

      if(!data.sys){
        this.setState({
          temp: undefined,
          city: undefined,
          country: undefined,
          sunrise: undefined,
          sunset: undefined,
          error: "Такого города нет!"
      });
      }else{
        var sunset = data.sys.sunset;
        var date = new Date();
        date.setTime(sunset*1000);
        var sunset_date = date.getHours() +":"+ date.getMinutes() +":"+ date.getSeconds();

        var sunrise = data.sys.sunrise;
        date = new Date();
        date.setTime(sunrise*1000);
        var sunrise_date = date.getHours() +":"+ date.getMinutes() +":"+ date.getSeconds();

        this.setState({
          temp: data.main.temp,
          city: data.name,
          country: data.sys.country,
          sunrise: sunrise_date,
          sunset: sunset_date,
          error: undefined
        });
      }
    } else {
      this.setState({
        temp: undefined,
        city: undefined,
        country: undefined,
        sunrise: undefined,
        sunset: undefined,
        error: "Введите название города!"
    });
  }
  }

  render() {
    return(
      <div className="wrapper">
        <div className="main">
          <div className="container">
            <div className="row">
              <div className="col-sm-5 info">
                <Info />
              </div>
              <div className="col-sm-7 form">
                <Form weatherMethod={this.gettingWeather} />
                <Weather
                    temp={this.state.temp}
                    city={this.state.city}
                    country={this.state.country}
                    sunrise={this.state.sunrise}
                    sunset={this.state.sunset}
                    error={this.state.error}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default App;
