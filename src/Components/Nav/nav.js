import React from 'react';
import './nav.css'
import mensClothing from '../Mens_Clothing/mensClothing';


class Nav extends React.Component {

   

        render(){
          const style = {
              color: 'whitesmoke',
    
            };
            return(
                 <div className="navbar navbar-expand-sm navbar-light mb-3">
                    {/* <div className="container"> */}
                        
                        
                        <ul className="navbar-nav  " >
                            <li className="nav-item dropdown list  " >
                                <a className="nav-link dropdown-toggle" img style={style}data-toggle="dropdown" href="localhost:3000/#/Mens-clothing">MEN'S</a>
                                    <div className="dropdown-menu">
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

                    </div>
                //  </div>
        )
    }
}

export default Nav



// <nav className="navbar navbar-default navbar-static-top">
