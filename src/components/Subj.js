import React from 'react';
import { Component } from 'react';

class Subj extends Component {
  render() {
    return (
      <header>
        <h1><a href="/" onClick={ function(e){
              e.preventDefault();
              this.props.onChangePage();
            }.bind(this)}
        >{this.props.title}</a></h1>
          {this.props.sub}
      </header>
      /* <header>       //------- in App.js ----------
            <h1><a href="/" onClick={ function(e){ 
              e.preventDefault();
              this.state.mode='welcome';
              this.setState({
                mode:'welcome'
              });
            }.bind(this)}>{this.state.subject.title}</a></h1>
        </header> */
    );
  }
}

export default Subj;