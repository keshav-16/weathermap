
import './App.css';
import { MapContainer, TileLayer,Marker,Popup } from 'react-leaflet'
import dta from "./in.json"

function weatherBalloon( lat,lon ) {
  var key = "08d23bc6e309518bbf96b1f64359bcd7";
  fetch('https://api.openweathermap.org/data/2.5/weather?lat=' + lat+'&lon='+lon+ '&appid=' + key)  
  .then(function(resp) { return resp.json() }) // Convert data to json
  .then(function(data) {
    console.log(data);
    return((data.main.temp));
  })
}

function App() {
  
  return (
    
    <MapContainer center={[22.7206, 75.8472]} zoom={5} scrollWheelZoom={false}>
      
  <TileLayer
    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
  />

  {dta.map(tsl => (
    
    <Marker position={[tsl.lat, tsl.lng]}>
    <Popup position={[tsl.lat, tsl.lng]}>
   <div>
    <h5>{"Weather : "+ String(weatherBalloon(tsl.lat, tsl.lng)) + " ^F"}</h5>
    <h4>{"Name : "+ tsl.city}</h4>
   </div>
    </Popup>
  </Marker>
  
  ))}
  
</MapContainer>
  );
}

export default App;
