import Navigation from './navigation'
import { Route, Switch } from 'react-router-dom';
import DataPackage from './forms/datapackage'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <div className="App">
        <Navigation />
          <Switch>                
             <Route path='/datapackage' component={DataPackage}/>  
             <Route exact path='/' component={Home}/>            
          </Switch>
    </div>
  );
}

function Home() {
    return(
        <h3>Open Data</h3>
    )
}

export default App;
