import React from 'react';
import { Component } from 'react';

class Cntrl extends Component {
  render() {
    return (
      <form>
        <ul>
          <input type="button" value="create" 
            onClick={function(e){
              e.preventDefault();
              this.props.onChangeMode('create')
            }.bind(this)}
          ></input>
          <input type="button" value="update" 
            onClick={function(e){
              e.preventDefault();
              this.props.onChangeMode('update')
            }.bind(this)}
          ></input>
          <input type="button" value="delete" 
            onClick={function(e){
              e.preventDefault();
              this.props.onChangeMode('delete')
            }.bind(this)}
          ></input>
        </ul>
      </form>
    );
  }
}

export default Cntrl;