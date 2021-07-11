import React from 'react'
import PackageCatalog from './component/package-catalog'
import DatasetCatalog from './component/dataset-catalog'
import DataPackage from './forms/datapackage'
import Navigation from './navigation'
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const App = () => {

    const Home = () => {
        return(
            <h3>HOME</h3>
        )
    }

    return (
            <div className="App">
                <BrowserRouter>
                <Navigation />
                <Switch>                
                    <Route path='/datapackage' component={DataPackage}/>
                    <Route path='/dataset-catalog' component={DatasetCatalog}/>
                    <Route path='/package-catalog' component={PackageCatalog}/>
                    <Route path='/home' component={Home}/>  
                    <Route path='/' exact component={Home}/>            
                </Switch>
                </BrowserRouter>
            </div>
    );
}



export default App;
