import '../style/App.css';
import Header from './component/Header'
import News from './component/News';
import Biography from './component/Biography';
import Publications from './component/Publications';
import Awards from './component/Awards';
import Projects from './component/Projects';

function App() {
  return (
    <div className="App bg-white">
      <Header />
      <Biography />
      <News bg_color='bg-white'/>
      <Publications bg_color='bg-white'/>
      <Awards bg_color='bg-white'/>
      <Projects bg_color='bg-white'/>
    </div>
  );
}

export default App;
