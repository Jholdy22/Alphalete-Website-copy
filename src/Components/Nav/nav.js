import React from 'react';
import './nav.css'
import { withRouter, Link } from 'react-router-dom'
import Login from '../Login/Login';
import axios from 'axios'



class Nav extends React.Component {


    logout(){
        axios.get('api/logout').then(res => {
            this.props.history.push('/')
        })
    }
        render(){
          
            return(
                 <div className="navbar navbar-expand-sm navbar-light mb-3 test">
                    {/* <div className="container"> */}
                        
                        
                        <ul className="navbar-nav" >
                            <li className="nav-item dropdown list" >
                                <a className="nav-link dropdown-toggle text-light" data-toggle="dropdown" href="localhost:3000/#/Mens-clothing">MEN'S</a>
                                    <div className="dropdown-menu">
                                        <Link to="/hoodies" className="dropdown-item">Hoodies</Link>
                                         <Link to="/shirts" className="dropdown-item">Tops</Link>
                                         <Link to="/joggers" className="dropdown-item">Joggers</Link>
                                    </div>
                            </li>
                        
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle text-light"
                                data-toggle="dropdown" href="">WOMEN'S</a>
                                <div className="dropdown-menu">
                                    <Link to='/wHoodies' className="dropdown-item">Hoodies</Link>
                                    <Link to='/wShirts' className="dropdown-item">Tops</Link>
                                    <Link to='/wJoggers' className="dropdown-item">Joggers</Link>
                                </div>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-light">GIFT CARDS</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-light">SUPPORT</a>
                            </li>
                    </ul>
                        <Login className="login_front_page"/>
                    <div />
                  </div>
        )
    }
}

export default withRouter(Nav)



// <nav className="navbar navbar-default navbar-static-top">
