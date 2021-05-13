import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from './components/Home'
import Movies from './components/Movies'
import About from './components/About'


function App() {
  return (
    <div className="App">

    <BrowserRouter>
      
        <Route exact path="/"  component={Home} />
        <Route path="/about" component={About} />
        <Route path="/movies" component={Movies} />
       
    </BrowserRouter>

    </div>
  );
}

export default App;
