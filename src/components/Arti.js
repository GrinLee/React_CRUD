import React from 'react';
import { Component } from 'react';

class Arti extends Component {
    render() {
      return (
        <article>
            <h2>{this.props.title}</h2>
            {this.props.desc}
        </article>
      );
    }
  }

export default Arti;
