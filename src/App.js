import logo from "./logo.svg";
import "./App.css";
import CountryList from "./components/CountryList";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <CountryList />
    </div>
  );
}

export default App;
