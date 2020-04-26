import React, { PureComponent } from 'react';

export default class PasswordComponent extends PureComponent {
  constructor(props) {
    super();
  }

  componentDidMount () {
    console.log("Changed");
  }
  render() {
    console.log("child component", this.props)
    return (
      <div>
      </div>
    );
  }
}
