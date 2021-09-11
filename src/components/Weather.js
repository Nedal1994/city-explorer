import React from 'react'
import WeatherDay from './WeatherDay'

class Weather extends React.Component
{
  render()
  {
    return(
      <div>
        {this.props.weatherData.map((item) =>{
          return (<WeatherDay description={item.description} date={item.date}/>)
        })}
          
      </div>
    )
  }
}

export default Weather 