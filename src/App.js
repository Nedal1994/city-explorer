import axios from 'axios'
import React from 'react'

class App extends React.Component
{
  constructor(props)
  {
    super(props)
    this.state={
      lat : '',
      lon : '',
      displayName : '',
      mapFlag : false,
      displayError:false
    }
  }
  getLocationData = async(event) =>
  {
    event.preventDefault()
    const cityName = event.target.cityName.value
    const myKey = `pk.33b75c3814f61e41ad800329948dbdf2`
    const URL = `https://us1.locationiq.com/v1/search.php?key=${myKey}&q=${cityName}&format=json`

    try{
      let result = await axios.get(URL)
    console.log(result);
    this.setState({
      lat:result.data[0].lat,
      lon:result.data[0].lon,
      displayName:result.data[0].display_name,
      mapFlag : true
    })
  }


catch
{
  this.setState({
    displayError:true
  })
}}
    
  render()
  {
    return(
      <div>
      <header>
        <h1>City Explorer</h1>
        </header><br/>
      <form onSubmit={this.getLocationData}>
        <label>City name</label><br/>
        <input type='text' name='cityName' id='citytext'/><br/><br/>   
        <button type='submit'>Get location</button>
      </form>

      <p>Display location name: {this.state.displayName}</p>
      <p>Latitude: {this.state.lat}</p>
      <p>Longitude: {this.state.lon}</p>
      <img src={`https://maps.locationiq.com/v3/staticmap?key=pk.33b75c3814f61e41ad800329948dbdf2&center=${this.state.lat},${this.state.lon}&zoom=18&size=500x500&format=png&maptype=<MapType>&markers=icon:<icon>|<latitude>,<longitude>&markers=icon:<icon>|<latitude>,<longitude>`}/>
      <footer>
        &copy;Nedal Al Saleh
      </footer>
      </div>
    )
  }
}

export default App 