import React from 'react'
import Card from 'react-bootstrap/Card'

class WeatherDay extends React.Component
{
  render()
  {
    return(
      <div>
         <Card>
           <Card.Text>Date: {this.props.date}</Card.Text>
           <Card.Text>Description: {this.props.description}</Card.Text>
        </Card> 
        
        
      </div>
    )
    
  }
}

export default WeatherDay 