import React from 'react'
import Card from 'react-bootstrap/Card'

class WeatherDay extends React.Component
{
  render()
  {
    return(
      <div>
        {this.props.weatherData.map((item)=>
        {
         <Card>
           <Card.Text>Date: {item.date}</Card.Text>
           <Card.Text>Description: {item.description}</Card.Text>
        </Card> 
        })}
        
      </div>
    )
    
  }
}

export default WeatherDay 