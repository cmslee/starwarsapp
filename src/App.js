import {useState, useEffect} from 'react';
import StarShipCard from './components/StarShipCard';
import './App.css';

function App() {
  const [ships, setShips] = useState([]);

  //useEffect hook is used to call an async function so that data can be fetched from API
  useEffect(() => {
    async function fetchShips(){
      try {
        let res = await fetch(`https://swapi.dev/api/starships/?format=json`);
        // don't forget to set both of these variables using await
        let data = await res.json();
        // remember that this is not just data, but results to get starship objects; using just data, as before, will return the objects nested in a whole lot of other stuff (depends on api?)
        setShips(data.results);
      } catch (e) {
       console.error(e) 
      }
    };
    // don't forget to call function after declaring it
    fetchShips()
  }, [])
  // check to make sure API data is being properly fetched, i.e. did you code function correctly?
  console.log(ships)
  return (
    <div className="App">
      <h1>Starwars Starships</h1>
      <div className='ships'>
      {ships.map((ship) => {
        return <StarShipCard shipData={ship}/>
      })} 
      </div>
    </div>
  );
}

export default App;
