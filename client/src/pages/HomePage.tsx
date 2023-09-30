import Navbar from '../components/Navbar';
import SearchResult from '../components/SearchResult';
import SearchPanel from '../components/SearchPanel';

function HomePage() {
  return (
    <div className="App">
      <Navbar />
      <div className="search-container">
        <SearchPanel />
        <SearchResult />
      </div>
    </div>
  );
};

export default HomePage;
