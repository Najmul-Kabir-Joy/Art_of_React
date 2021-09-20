import './App.css';
import Countries from './components/Countries/Countries';
function App() {
  return (
    <div className="App">
      <Countries></Countries>
    </div>
  );
}

/* function Coutries() {
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    fetch('https://restcountries.eu/rest/v2/all')
      .then(res => res.json())
      .then(data => setCountries(data))
  }, [])
  return (
    <div>
      <h3>Implementing Rest Countries API with REACT</h3>
      <h6>Countries available: {countries.length}</h6>
      {
        countries.map(country => <Country name={country.name} capital={country.capital}></Country>)
      }
    </div>
  )
}

function Country(props) {
  return (
    <div>
      <h5>Name: {props.name}</h5>
      <h6>Capital of {props.name} is {props.capital}</h6>
    </div>
  )
}
 */
export default App;
