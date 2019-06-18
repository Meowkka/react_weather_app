import React from "react";

const Form = props =>(
  <form onSubmit={props.weatherMethod}>
    <input type="text" name="city" autoComplete="off" placeholder="Город"/>
    <button>Узнать погоду</button>
  </form>
)

export default Form;
