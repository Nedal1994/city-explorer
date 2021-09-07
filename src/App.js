import axios from 'axios'
import React from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'

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
      maxTemp:'',
      minTemp:'', 
      date: '',
      weatherData:[]
    }
  }
  getLocationData = async(event) =>
  {
    event.preventDefault()
    const cityName = event.target.cityName.value
    const URL = `https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_KEY}&q=${cityName}&format=json`
    // const weatherUrl = `https://lap7.herokuapp.com/weather?city_name=${cityName}`
    const weatherUrl = `http://localhost:3200/weather?city_name=${cityName}&lat=${this.state.lat}&lon=${this.state.lon}`
    
console.log('ok')
    try{

      let result = await axios.get(URL)
      console.log(result)
      this.setState({
      // date: jsonData.data[0].date,
      // maxTemp:jsonData.data[0].maxTemp,
      // minTemp:jsonData.data[0].minTemp,
      // description: jsonData.data[0].description,


      lat:result.data[0].lat,
      lon:result.data[0].lon,
      displayName:result.data[0].display_name,
      mapFlag : true,
    })
        const jsonData = await axios.get(weatherUrl)

   this.setState({
     weatherData:jsonData.data
   })
   console.log(this.state.weatherData);
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

      <p>Display location name: {this.state.displayName}</p>
      <p>Latitude: {this.state.lat}</p>
      <p>Longitude: {this.state.lon}</p>
      <p>Dates: <br/>{this.state.date}</p>
      {/* <p>Description: <br/>{this.state.description}</p> */}
      <img src={`https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_KEY}&center=${this.state.lat},${this.state.lon}&zoom=18&size=500x500&format=png&maptype=<MapType>&markers=icon:<icon>|<latitude>,<longitude>&markers=icon:<icon>|<latitude>,<longitude>`}/>
      
      {this.state.weatherData.map((item) => {
        return (<Card>
  <h1>{item.date}</h1>
  <p>{item.description}</p>
</Card>)


      })} 
      
      <footer>
        &copy;Nedal Al Saleh
      </footer>
      </div>
    )
  }
}

export default App 