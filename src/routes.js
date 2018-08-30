import React from 'react';
import {Switch, Route} from 'react-router-dom';
import homePage from './Components/Home/home';
import Private from './Components/Private/Private';
import mensClothing from './Components/Mens_Clothing/mensClothing';
import Hoodies from './Components/Mens_Clothing/hoodies';


export default (
    <Switch className="Routes" >
        <Route exact path='/' component={homePage} />
        <Route path='/Private' component={Private} />
        <Route path='/Mens-clothing' component={mensClothing} />
        <Route path='/Hoodies' component={Hoodies} />
    </Switch>
)