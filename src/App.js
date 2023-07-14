import './styles/style.css';
import Personal from './components/personal';
import Experience from './components/experience';
import Education from './components/education';

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <h1>CV Application</h1>
      </header>
      <main>
        <Personal />
        <Experience />
        <Education />
      </main>
    </div>
  );
}

export default App;
