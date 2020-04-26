import React, { PureComponent } from 'react';

export default class PasswordComponent extends PureComponent {
  constructor(props) {
    super();
  }

  componentDidMount () {
    
  }
  render() {
    console.log("child component", this.props)
    return (
      <div>
      </div>
    );
  }
}
