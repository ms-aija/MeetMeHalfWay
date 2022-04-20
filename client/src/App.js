import './App.scss';
import Navbar from './components/Navbar';
import Search from './components/Search';
import SearchResult from './components/SearchResult';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Search/>
      <SearchResult/>
    </div>
  );
}

export default App;
