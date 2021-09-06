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
      displayError:false,

      description: '',
      description1: '',
      description2: '',

      maxTemp:'',
      maxTemp1:'',
      maxTemp2:'',

      minTemp:'',
      minTemp1:'',
      minTemp2:'',
      
      date: '',
      date1: '',
      date2: ''
    }
  }
  getLocationData = async(event) =>
  {
    event.preventDefault()
    const cityName = event.target.cityName.value
    const myKey = `pk.5f176f6f3dac23ab3b25be92da1e89e4`
    const URL = `https://us1.locationiq.com/v1/search.php?key=${myKey}&q=${cityName}&format=json`
    const weatherUrl = `https://lap7.herokuapp.com/weather?city_name=${cityName}`
 
    const jsonData = await axios.get(weatherUrl)
   console.log(jsonData.data);
    try{
      let result = await axios.get(URL)
    this.setState({
      date: jsonData.data[0].date,
      date1: jsonData.data[1].date,
      date2: jsonData.data[2].date,

      maxTemp:jsonData.data[0].maxTemp,
      maxTemp1:jsonData.data[1].maxTemp,
      maxTemp2:jsonData.data[2].maxTemp,

      minTemp:jsonData.data[0].minTemp,
      minTemp1:jsonData.data[1].minTemp,
      minTemp2:jsonData.data[2].minTemp,

      description: jsonData.data[0].description,
      description1: jsonData.data[1].description,
      description2: jsonData.data[2].description,

      lat:result.data[0].lat,
      lon:result.data[0].lon,
      displayName:result.data[0].display_name,
      mapFlag : true,
    })
  }


catch
{
  this.setState({
    displayError:true
  })
}
console.log(this.state.maxTemp);
}


    
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
      <p>Dates: <br/>{this.state.date}<br/>{this.state.date1}<br/>{this.state.date2}</p>
      <p>Description: <br/>{this.state.description}<br/>{this.state.description1}<br/>{this.state.description2}</p>
      <p>Temperatures: <br/>{this.state.minTemp} - {this.state.maxTemp}
      <br/>{this.state.minTemp1} - {this.state.maxTemp1}<br/>
      {this.state.minTemp1} - {this.state.maxTemp1}</p>

      <img src={`https://maps.locationiq.com/v3/staticmap?key=pk.5f176f6f3dac23ab3b25be92da1e89e4&center=${this.state.lat},${this.state.lon}&zoom=18&size=500x500&format=png&maptype=<MapType>&markers=icon:<icon>|<latitude>,<longitude>&markers=icon:<icon>|<latitude>,<longitude>`}/>
      <footer>
        &copy;Nedal Al Saleh
      </footer>
      </div>
    )
  }
}

export default App 