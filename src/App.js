import Navigation from './navigation'
import { BrowserRouter as Router} from 'react-router-dom';
import { Route, Switch } from 'react-router-dom';
import PackageCatalog from './component/package-catalog'
import DatasetCatalog from './component/dataset-catalog'
import DataPackage from './forms/datapackage'
//import 'bootstrap/dist/css/bootstrap.min.css';
//import './App.css';

const App = () => {
  return (
    <Router>
        <div className="App">
            <Navigation />
            <Switch>                
                <Route path='/datapackage' component={DataPackage}/>
                <Route path='/dataset-catalog' component={DatasetCatalog}/>
                <Route path='/package-catalog' component={PackageCatalog}/>  
                <Route exact path='/' component={Home}/>            
            </Switch>
        </div>
    </Router>

  );
}

function Home() {
    return(
        <h3>Open Data</h3>
    )
}

export default App;
