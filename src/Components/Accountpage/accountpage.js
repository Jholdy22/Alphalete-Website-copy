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
    let res = await axios.get('/api/user-data')
    this.props.updateUser(res.data)
    }

  render() {
      console.log(this.props)
      let {user} = this.props;

   

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
              <a href="http://localhost:4000/auth/logout">
                <button>Log Out</button>
              </a>
          </div>
         
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