import React from 'react';
import './nav.css'
import { Link } from 'react-router-dom'



class Nav extends React.Component {

    login(){
        let {REACT_APP_DOMAIN, REACT_APP_CLIENT_ID} = process.env;
        let url = `${encodeURIComponent(window.location.origin)}/Account`
        window.location = `https://${REACT_APP_DOMAIN}/authorize?client_id=${REACT_APP_CLIENT_ID}&scope=openid%20profile%20email&redirect_uri=${url}&response_type=code`
    }

        render(){
          
            return(
                 <div className="navbar navbar-expand-sm navbar-light mb-3 test">
                    {/* <div className="container"> */}
                        
                        
                        <ul className="navbar-nav" >
                            <li className="nav-item dropdown list" >
                                <a className="nav-link dropdown-toggle text-light" data-toggle="dropdown" href="localhost:3000/#/Mens-clothing">MEN'S</a>
                                    <div className="dropdown-menu">
                                        <Link to="/Mens-clothing" className="dropdown-item">Hoodies</Link>
                                         <a href="#" className="dropdown-item">Tops</a>
                                         <a href="#" className="dropdown-item">Joggers</a>
                                    </div>
                            </li>
                        
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle text-light"
                                data-toggle="dropdown" href="">WOMEN'S</a>
                                <div className="dropdown-menu">
                                    <a href="#" className="dropdown-item">Tops</a>
                                    <a href="#" className="dropdown-item">Bottoms</a>
                                </div>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-light" href="#">GIFT CARDS</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-light" href="#">SUPPORT</a>
                            </li>
                        </ul>
                        <button className="buttonTag"
                            onClick={this.login}>Account
                        </button>
                    </div>
                //  </div>
        )
    }
}

export default Nav



// <nav className="navbar navbar-default navbar-static-top">
