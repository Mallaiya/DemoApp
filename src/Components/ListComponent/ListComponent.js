import React, { Component } from 'react';

export default class ListComponent extends Component {
  render() {
    return (
      <div className = "list">
          <p>{this.props.data.title.toUpperCase()}</p>
          <img src = {this.props.data.url} alt="" />
      </div>
    );
  }
}
