import React from 'react';
import Nav from '../../Nav/nav';
import Header from '../../Header/header';
import './hoodies.css'
import axios from 'axios'


class Hoodies extends React.Component {
        constructor(props){
            super(props);

            this.state= {
                hoodies: []
            }
        }

        componentDidMount(){
            axios.get('api/clothing/Male/Hoodies').then(results => {
                console.log(results)
                this.setState({hoodies: results.data})
            })
        }

    render(){
        const mappedHoodies = this.state.hoodies.map((hood, i) => {
            return(
                <div key={i}>
                    <h3>{hood.category}</h3>
                    <img className="images" src={hood.image} alt=''/>
                </div>
            )
        })


        return(
            <div className="body">
                <Header />
                <Nav />
                <div className="whiteBox">
                    {mappedHoodies}
                </div>
            </div>
        )
    }
}

export default Hoodies