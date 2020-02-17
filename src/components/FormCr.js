import React from 'react';
import { Component } from 'react';

class FormCr extends Component {
    render() {
      return (
        <article>
            <h3>{this.props.title}</h3>
            <form action="/FormCr" method="post"
              onSubmit={function(e){
                // debugger;
                e.preventDefault();
                this.props.onSubmit(
                  e.target.title.value,
                  e.target.desc.value
                );
              }.bind(this)}
              
            >
              <p><input type="text" name="title"
                placeholder="Title"></input></p>
              <p><textarea name="desc"
                placeholder="Description"></textarea></p>
              <p>
                <input type="submit"></input>
              </p>
            </form>
            {this.props.desc}
        </article>
      );
    }
  }

export default FormCr;