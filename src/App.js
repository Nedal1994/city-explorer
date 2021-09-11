import axios from 'axios'
import React from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.min.css';
import Weather from './components/Weather'
import MovieComponent from './components/MovieComponent'

class App extends React.Component
{
  constructor(props)
  {
    super(props)
    this.state={
      lat : '',
      lon : '',
      displayName : '',
      display : false,
      displayError:false,
      description: '',
      maxTemp:'',
      minTemp:'', 
      date: '',
      weatherData:[],
      moviesData:[],
    }
  }
  getLocationData = async(event) =>
  {
    event.preventDefault()
    const cityName = event.target.cityName.value
    const URL = `https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_KEY}&q=${cityName}&format=json`
    // const weatherUrl = `https://lap7.herokuapp.com/weather?city_name=${cityName}`
    // const weatherUrl = `http://localhost:3200/weather?city_name=${cityName}&lat=${this.state.lat}&lon=${this.state.lon}`
   const server = `https://lap10.herokuapp.com/weather?name=${cityName}`
    
console.log('ok')
    try{

      let result = await axios.get(URL)
      console.log(result)
      this.setState({

      lat:result.data[0].lat,
      lon:result.data[0].lon,
      displayName:result.data[0].display_name,
      display : true,
    })
        const jsonData = await axios.get(`${server}`)

   this.setState({
     weatherData:jsonData.data,
   })
   console.log(this.state.weatherData);
  }
catch
{
  this.setState({
    displayError:true
  })
}
this.getMovieData(event)
}

getMovieData = async(event) =>
{
  event.preventDefault()
  const cityName = event.target.cityName.value
  const movieUrl = `https://lap10.herokuapp.com/movies?name=${cityName}`
  // const movieUrl = `http://localhost:3200/movies?name=${cityName}`
  
console.log('ok')
  try{

    let result = await axios.get(movieUrl)
    console.log(result)
    this.setState({

    moviesData: result.data,
    display : true,
  })
      const jsonData = await axios.get(movieUrl)

 this.setState({
   moviesData:jsonData.data,
 })
 console.log(this.state.moviesData);
}

catch
{
this.setState({
  displayError:true
})
}
}


  render()
  {
    return(
      <div>
      <header>
        <h1>City Explorer</h1>
        </header><br/>
      <Form onSubmit={this.getLocationData}>
        <label>City name</label><br/>
        <input type='text' name='cityName' id='citytext'/><br/><br/>   
        <Button type='submit'>Get location</Button>
      </Form>

      <img src={`https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_KEY}&center=${this.state.lat},${this.state.lon}&zoom=18&size=500x500&format=png&maptype=<MapType>&markers=icon:<icon>|<latitude>,<longitude>&markers=icon:<icon>|<latitude>,<longitude>`}/>
      
      <Weather display={this.state.display} weatherData={this.state.weatherData}/>
      <MovieComponent display={this.state.display} moviesData={this.state.moviesData}/>

      <footer>
        &copy;Nedal Al Saleh
      </footer>
      </div>

    )
  }
}

export default App 