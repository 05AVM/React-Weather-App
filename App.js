import React,{useState} from 'react';
import './App.css';
import axios from 'axios';


function App() {
  const[data,setData]=useState('')
  //data is a variable that holds the response data from the Open Weather API. It likely contains various properties related to weather information, such as temperature, humidity, wind speed, etc.
  const [location,setLocation]=useState('')

  const url=`https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=b131c12a1e1d081bad4d6bd6a196d44e`
  
  /*In the provided code, searchLocation is a function that is triggered when a key is pressed inside the input field. It checks if the pressed key is "Enter". If it is, the code sends a GET request to the specified url using Axios to fetch data from the server.

Once the response is received, the data is stored in the response.data object. The setData function is then called to update the state or variable (data) with the received data. The console.log statement is used to log the response data to the console for debugging purposes.

Additionally, setLocation('') is called to reset the value of the location variable (presumably a state or variable that holds the entered location) to an empty string. This is likely done to clear the input field after the request is made. 

In the code snippet you provided, data is a variable that holds the response data from the Open Weather API. It likely contains various properties related to weather information, such as temperature, humidity, wind speed, etc.


*/


  
  const searchLocation=(event)=>{
    if(event.key==='Enter'){
      axios.get(url).then((response)=>{
        setData(response.data)
        console.log(response.data)
      })
      setLocation('')
    }

    }
    

  return (
    <div className="app">
     <div className='search'>
      <input 
      value={location}
      onChange={event=> setLocation(event.target.value)}
      onKeyDown={searchLocation}
      placeholder='Enter Location'
      type="text"/>
     </div>
      <div className='container'>
        <div className='top'>
          <div className='location'>
            <p>{data.name}</p>
            </div>

            <div className="temp">
            {data.main ? <h1> {data.main.temp.toFixed()} °C </h1> : null } 
            </div>

            <div className="description">
            {data.weather ? <p>{data.weather[0].main}  </p>:null}
            </div>

        </div>

        <div className="bottom">
          <div className="Visibility">
          <p>Visibility</p>
          {data.main ? <p>{data.visibility}m </p>:null}
          
          </div>
        
        
        <div className="humidity">
        <p>Humidity</p>
        {data.main ? <p className='bold'>{data.main.humidity}%</p> : null}
        </div>

        <div className="wind">
        <p>Wind Speed</p>
        {data.main ? <p className='bold'>{data.wind.speed.toFixed()}MPH</p> : null}
        </div>
        </div>
      </div>
    </div>
  );
}

export default App;
