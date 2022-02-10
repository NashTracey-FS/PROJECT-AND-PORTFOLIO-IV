import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react';

function App() {
  const [cityData, setCityData] = useState(null);
  const [fourDay,setFourDay] = useState(null);
  const [astroData,setAstroData] = useState(null);

  useEffect(() => {
    const fetchData = async() =>{
      const response = await fetch(`http://api.weatherapi.com/v1/current.json?key=dad7eb01cf6140c0ba9161555220702&q=30260&aqi=no`);
      const data = await response.json();
      const [city] = data.results;

        setCityData(city)
      }
      
    fetchData()
    .catch (console.error);;
  },[])
  useEffect(() => {
    const fetchData = async() =>{
      const response = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=dad7eb01cf6140c0ba9161555220702&q=30260&days=4&aqi=no&alerts=no`);
      const data = await response.json();
      const [four] = data.results;

        setFourDay(four)
      }
      
    fetchData()
    .catch (console.error);;
  },[])
  useEffect(() => {
    const fetchData = async() =>{
      const response = await fetch(`http://api.weatherapi.com/v1/astronomy.json?key=dad7eb01cf6140c0ba9161555220702&q=30260&dt=2022-02-10`);
      const data = await response.json();
      const [astro] = data.results;

        setAstroData(astro)
      }
      
    fetchData()
    .catch (console.error);;
  },[])

  return (
    <div className="App">
      
    </div>
  );
}

export default App;
