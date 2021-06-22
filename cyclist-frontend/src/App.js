import { useEffect, useState } from 'react';
import cyclistService from './services/cyclist.service';
import Loading from './components/common/loading/Loading';
import './App.css';
import CustomSelect from './components/common/customSelect/CustomSelect';
import Body from './components/body/Body';

function App() {
  const [ locations, setLocations ] = useState([])
  const [ locationData, setLocationData ] = useState([]);
  const [ loading, setLoading ] = useState(false);
  const options = locations.map((item) => ({value: item.name, label: item.name, id: item.id}))

  useEffect(() => {
    const fetchData = async () => {
      const newLocations = await cyclistService.getLocations();
      setLocations(newLocations);
    };
    fetchData();
  }, []);

  const handleChange = async (selected) => {
    setLoading(true);
    const newLocationData = await cyclistService.getLocationData(selected.id);
    setLocationData(newLocationData);
    setLoading(false);
  };

  const renderBody = () => {
    if (loading) {
      return <div className="loading-container"><Loading /></div>
    }

    if (locationData.length > 0) {
      return <Body data={locationData}/>
    }
    return <></>
  }

  return (
    <div>
      <p>Valitse mittauspiste</p>
      <CustomSelect
        onChange={handleChange}
        options={options}
      />
      {
        renderBody()            
      }
    </div>
  );
}

export default App;
