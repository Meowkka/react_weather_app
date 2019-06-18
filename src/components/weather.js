import React from "react";

const Weather = props => (<div>
  {
    props.city &&
    <div className="infoWeath">
      <p><span className="infoWeathHeads">Местоположение: </span>{props.city}, {props.country}</p>
      <p><span className="infoWeathHeads">Температура: </span>{Math.round(props.temp)}°</p>
      <p><span className="infoWeathHeads">Восход солнца: </span>{props.sunrise}</p>
      <p><span className="infoWeathHeads">Заход солнца: </span>{props.sunset}</p>
    </div>
  }
  <p className="error">{props.error}</p>
  </div>
);

export default Weather;
