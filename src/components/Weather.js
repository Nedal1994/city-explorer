import React from 'react'
import WeatherDay from './WeatherDay'

class Weather extends React.Component
{
  render()
  {
    return(
      <div>
          <WeatherDay weatherData={this.props.weatherData}/>
      </div>
    )
  }
}

export default Weather 