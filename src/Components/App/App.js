import React from 'react';



import PS from '../App/PasswordComponent/PasswordComponent'


export default class App extends React.Component {
  constructor(props) {
    super();
    this.state = {
    };
  }

  componentDidMount() {
  }


  render() {
    console.log("APp component")
    return (
      <div>
        <PS props = {this.state.myData}/>
        <button onClick = {() => {
          const d = [...this.state.myData];
          d.push(100);
          this.setState({ myData : d})
          }}>Change Data 1</button>
        <button onClick = {() => {this.setState({ myData : 'Mallaiya'})}}>Change Data 2</button>
        <button onClick = {() => {
            const data = this.state.myData;
            this.setState({ myData : data})
          }}>Change Data 3</button>
      </div>
    );
  }
} 