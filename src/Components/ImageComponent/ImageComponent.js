import React, { Component } from 'react';
import ListComponent from '../ListComponent/ListComponent';
import PasswordComponent from '../App/PasswordComponent/PasswordComponent';
import { Switch, Route, Link, withRouter } from 'react-router-dom';

class ImageComponent extends Component {
  constructor(props) {
    super();
    this.state = {
      data: [
        {
          id: 'akhfg34786',
          name: 'Mallaiya',
          password: '123@!@#'
        },
        {
          id: '0978sg4gjh',
          name: 'Joe',
          password: 'abc@123'
        }
      ],
      isPassword : true,
      myPass : ''
    }
  }
  componentDidMount () {
  }

  showPassword = (id) => {
    const { password } = this.state.data.find(d =>  d.id === id);
    this.setState({
      isPassword : true,
      myPass: password
    })
    this.props.history.push(`/user/${id}`);
  }

  render() {
    return(
      <div className = "imgComponent">   
      <hr />
      <div className = "user">
        {
          this.state.data.map(d => {
            return <div key = {d.id} onClick = {() => this.showPassword(d.id)}>{d.name}</div>; 
          })
        }  
        </div>
          {
            !this.state.isPassword ? 'Select user to see pasword ' : <Route exact path="/user/:id"><PasswordComponent myProps = {this.state.myPass}/></Route>
          }
      </div>
    );
  }
}

export default withRouter(ImageComponent);
