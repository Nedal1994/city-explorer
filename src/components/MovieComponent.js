import React from 'react'
import Movie from './Movie'

class MovieComponent extends React.Component {
  render() {
    console.log(this.props.moviesData)
    return (
      <div>
        {this.props.moviesData.map((item) => {
          return (
          <Movie title = {item.title}
          overview = {item.overview}
          release_date = {item.release_date}
          popularity = {item.popularity}
          vote_average = {item.vote_average}
          vote_count = {item.vote_count}
          poster_path = {item.poster_path}/>
          )
        })}
      </div>
    )
  }
}

export default MovieComponent