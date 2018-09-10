import React from 'react';
import {Switch, Route} from 'react-router-dom';
import homePage from './Components/Home/home';
// import Private from './Components/Private/Private';
import mensClothing from './Components/Mens_Clothing/Mens_All_Clothing/mensAllClothing';
import Hoodies from './Components/Mens_Clothing/Hoodies/hoodies';
import Shirts from './Components/Mens_Clothing/Shirts/menShirts';
import Joggers from './Components/Mens_Clothing/Joggers/joggers';
import wTops from './Components/Womens_Clothing/womans_All_Clothes/womensClothing';
import wJoggers from './Components/Womens_Clothing/Joggers/wJoggers';
import wHoodies from './Components/Womens_Clothing/Hoodies/wHoodies';
import wShirts from './Components/Womens_Clothing/Shirts/wShirts';
import cart from './Components/Cart/cart';
import Premium from './Components/Premium/premium';
import Account from './Components/Accountpage/accountpage'



export default (
    <Switch className="Routes" >
        <Route exact path='/' component={homePage} />
        {/* <Route path='/Private' component={Private} /> */}
        <Route path='/mens-clothing' component={mensClothing} />
        <Route path='/hoodies' component={Hoodies} />
        <Route path='/shirts' component={Shirts} />
        <Route path='/joggers' component={Joggers} />
        <Route path='/women-clothing' component={wTops} />
        <Route path='/wJoggers' component={wJoggers} />
        <Route path='/wHoodies' component={wHoodies} />
        <Route path='/wShirts' component={wShirts} />
        <Route path='/cart' component={cart} />
        <Route path='/Account' component={Account} />
        <Route path='/premium-clothing' component={Premium} />
    </Switch>
)