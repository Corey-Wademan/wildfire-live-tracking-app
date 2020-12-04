import {useState, useEffect} from 'react';
import Map from './Components/Map.js';
import Loader from './Components/Loader';
import Header from './Components/Header';
require('dotenv').config()


function App() {
  const [eventData, seteventData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchEvents = async () => {
      setLoading(true);
      const res = await fetch('https://eonet.sci.gsfc.nasa.gov/api/v2.1/events');
      const { events } = await res.json();

      seteventData(events);
      setLoading(false);
    }

    fetchEvents();
  }, []);


  return (
    <div>
      <Header />
      { !loading ? <Map eventData={eventData}/> : <Loader />  }  
    </div>
  );
}

export default App;
