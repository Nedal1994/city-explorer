import React from 'react'
import Card from 'react-bootstrap/Card'

class Movie extends React.Component
{
    
  render()
  {
    return(
      <div>
         
         <Card>
           <Card.Text>Title: {this.props.title}</Card.Text>
           <Card.Text>{this.props.poster_path}</Card.Text>
           <Card.Text>Overview: {this.props.overview}</Card.Text>
           <Card.Text>Release date: {this.props.release_date}</Card.Text>
           <Card.Text>Popularity: {this.props.popularity}</Card.Text>
           <Card.Text>Average votes: {this.props.vote_average}</Card.Text>
           <Card.Text>Vote counts: {this.props.vote_count}</Card.Text>
        </Card> 
        
        
      </div>
    )
      
    
  }
}

export default Movie 