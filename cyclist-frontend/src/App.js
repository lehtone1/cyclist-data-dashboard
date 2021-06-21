import { useEffect, useState } from 'react';
import cyclistService from './services/cyclist.service';
import Table from './components/Table';
import Loading from './components/common/loading/Loading';
import './App.css';
import CustomSelect from './components/common/customSelect/CustomSelect';

function App() {
  const [ locations, setLocations ] = useState([])
  const [ selected, setSelected ] = useState({name: ''})
  const [ locationData, setLocationData ] = useState([]);
  const [ loading, setLoading ] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const newLocations = await cyclistService.getLocations();
      setLocations(newLocations);
    };
    fetchData();
  }, []);

  const handleChange = async (selected) => {
    console.log(selected);
    setSelected(selected);
    setLoading(true);
    const newLocationData = await cyclistService.getLocationData(selected.id);
    setLocationData(newLocationData);
    setLoading(false);
  };

  console.log(locationData);
  return (
    <div>
      <CustomSelect
        labelId="location-selector"
        value={selected.name}
        onChange={handleChange}
        items={locations}
        label="Valitse sijainti"
      />
      {
        loading
          ? <div className="loading-container"><Loading /></div>
          : <></>
      }
      {
        !loading && locationData.length > 0
          ? <Table locationData={locationData} /> 
          : <></>
      }
    </div>
  );
}

export default App;
