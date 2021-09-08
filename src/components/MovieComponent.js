import React from 'react'
import Movie from './Movie'

class MovieComponent extends React.Component
{
  render()
  {
    return(
      <div>
          <Movie moviesData={this.props.moviesData}/>
      </div>
    )
  }
}

export default MovieComponent 