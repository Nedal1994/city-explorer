import React from 'react'
import Card from 'react-bootstrap/Card'

class Movie extends React.Component
{
    
  render()
  {
    return(
      <div>
        {this.props.moviesData.map((item)=>
        {
         <Card>
           <Card.Text>Title: {item.title}</Card.Text>
           <Card.Text>Overview: {item.overview}</Card.Text>
           <Card.Text>Release date: {item.release_date}</Card.Text>
           <Card.Text>Popularity: {item.popularity}</Card.Text>
           <Card.Text>Average votes: {item.vote_average}</Card.Text>
           <Card.Text>Vote counts: {item.vote_count}</Card.Text>
        </Card> 
        })}
        
      </div>
    )
      
    
  }
}

export default Movie 