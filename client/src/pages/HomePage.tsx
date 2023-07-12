import Navbar from '../components/Navbar';
import SearchResult from '../components/SearchResult';
import SearchPanel from '../components/SearchPanel';

function HomePage() {
  return (
    <div className="App">
      <div className='navbar-search-container'>
        <Navbar />
      </div>
      <div className="search-panel-container">
        <SearchPanel/>
        <SearchResult/>
      </div>
    </div>
  );
};

export default HomePage;
