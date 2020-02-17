import React from 'react';
import { Component } from 'react';

class FormUp extends Component {
  constructor(props){
    super(props);
    this.state={
      id:this.props.data.id,
      title:this.props.data.title,
      desc:this.props.data.desc
    } 
    this.inputHndl = this.inputHndl.bind(this);
  }
    inputHndl(e){
      this.setState({[e.target.name]:e.target.value});
    }

    render() {
      // console.log(this.props.data);  //<== this.get_read();
      return (
        <article>
            <h3>{this.props.title}</h3>
            <form action="/FormUp" method="post"
              onSubmit={function(e){
                // debugger; // alert('Submit!!');
                e.preventDefault();
                this.props.onSubmit(
                  this.state.id,    //=== this.props.data.id
                  this.state.title,
                  this.state.desc   //=== e.target.desc.value
                );
              }.bind(this)}
            >
              <input type='hidden' name='id' value={this.state.id}></input>
              <p><input type="text" name="title" placeholder="Title"
                    value={this.state.title}
                    onChange={this.inputHndl} 
                  ></input></p>
              <p><textarea name="desc" placeholder="Description"
                    value={this.state.desc}  
                    onChange={this.inputHndl}  
                  ></textarea></p>
              <p>
                <input type="submit"></input>
              </p>
            </form>
            {this.props.desc}
        </article>
      );
    }
  }

export default FormUp;