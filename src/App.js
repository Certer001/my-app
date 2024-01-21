import logo from './logo.svg';
import './App.css';

const App = () => {
  return (
    <div className="App">
        <Popa />
        <Header />
    </div>
  );
}

const Popa = () => {
    return(
        <div>
            <ul>
                <li>css</li>
                <li>html</li>
                <li>js</li>
                <li>react</li>
            </ul>
        </div>
    );
}

const Header = () => {
    return(
        <div className="Header">
            <a>Home</a>
            <a>page2</a>
        </div>
    );
}


export default App;
