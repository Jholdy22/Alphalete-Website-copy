import React, { Component } from 'react'
import axios from 'axios';
import {connect} from 'react-redux';
import {updateUser} from './../../ducks/reducer'
import Nav from '../Nav/nav';
import Header from '../Header/header';
import {Link} from 'react-router-dom';
// import './Accountpage.css';

class Accountpage extends Component {
    constructor(props){
        super(props);

        this.state = {
            user: {}
        }
    }

async componentDidMount(){
    let res = axios.get('/api/user-data')
    this.props.updateUser(res.data)
    }

  render() {
      console.log(this.props)
      let {user} = this.props;

    //   const mainStyle = {
    //     height: '100vh',
    //     width: '100%',
    //     display: 'flex',
    //     flexDirection: 'column',
    //     flexWrap: 'nowrap',
    //     justifyContent: 'center',
    //     alignItems: 'center',
    //     alignContent: 'center',
    // }
    // const imgStyle = {
    //     width: '300px',
    //     height: '300px',
    //     boxShadow: '3px 5px',
    //     marginBottom: '10px'
    // }
    // const textStyle = {
    //     color: '#dfdfdf'
    // }

      return (
        <div>
            <Header />
          <Nav />
          <div>
              <h1>Account Details</h1>
              <hr/> <hr/> <hr/>
              {
                  user.user_name ? (
                      <div>
                          <p>Account Holder: {user.user_name}</p>
                          <p>Email: {user.email}</p>
                          <p>Account ID: {user.auth_id}</p>
                          <img src={user.picture} alt=""/>
                      </div>
                  )
                  :(<p>Log Out</p>)
              }
              <a href="http://localhost:4000/auth/logout"></a>
                <button>Log Out</button>
          </div>
          {/* <div style={mainStyle} className='accountpage-main'>
            <div className='account-content-container'>
                <h2 style={textStyle}>Account Information</h2>
                {
                    user.user_name? (
                        <div>
                            <img style={imgStyle} src={user.picture} alt="" />
                            <h6 style={textStyle}>Account Holder: {user.user_name}</h6>
                            <h6 style={textStyle}>Account Email: {user.email}</h6>
                        </div>
                    ) : <p> <Link to='/'>Here</Link></p>
                }
            </div>
        </div> */}
          </div>
        
      )
    }
  }
  
  function mapStateToProps(state){
      return {
          user: state.user
      }
  }
  
  
  export default connect(mapStateToProps, {updateUser})(Accountpage);