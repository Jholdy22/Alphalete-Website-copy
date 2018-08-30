import React from 'react';
import './home.css'
import Header from '../Header/header';
import Nav from '../Nav/nav.js';
import pic1 from '../pictures/Left_Picture_Main.jpeg';
import pic2 from '../pictures/Right_Picture_Main.jpg';



class Home extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            loading: true
        };
    }

    componentDidMount(){
        setTimeout(() => this.setState({loading: false}), 100)
    }

    render(){
        const { loading } = this.state;

        if(loading){
            return null;
        }
        return(
        <div className="Body">
         <Header />
         <Nav />
            <div className="body-white">
                <div>
                    <img className="shalley" src={pic1}/>
                        <div>
                        <button className="ShalButton">SHOP NEW MEN'S </button>
                        </div>
                    
                </div>
                <div>
                    <img className="becca" src={pic2}/>
                    <div>
                    <button className="becButton">SHOP NEW WOMEN'S</button>
                    </div>
                </div>
            </div>
        </div>
        )
    }
}

export default Home