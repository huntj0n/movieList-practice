import './App.css';
import MovieList from './components/MovieList';

function App() {
  return (
    <div className="app">
      <header>
        <h1 className='app__headerTitle'>MovieList.io</h1>
      </header>
      <MovieList/>
    </div>
  );
}

export default App;
