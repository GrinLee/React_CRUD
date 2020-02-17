import React from 'react';
import { Component } from 'react';
import './App.css';

import Subj from './components/Subj';
import Navi from './components/Navi';
import Arti from './components/Arti';
import FormCr from './components/FormCr';
import FormUp from './components/FormUp';
import Cntrl from './components/Cntrl';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {      /****  STATE = PROPS  *****/
      mode: "welcome",
      sel_id: 0,
      subject:{title:'Web', sub:'World Wide Web' },
      welcome:{title:'Welcome', desc:'Hello React' },
      contents:[
        {id:1, title:'HTML', desc:'HTML is HyperText Markup Language'},
        {id:2, title:'CSS', desc:'CSS is Cascading Style Sheets'},
        {id:3, title:'JS', desc:'JS is Jave Script'},
        {id:4, title:'PHP', desc:'PHP is Hypertext Preprocessor'}
      ]
    }
    this.max_id = this.state.contents.length;
  }
      get_read(){
        var i=0;
        while(i < this.state.contents.length){
          var data = this.state.contents[i];
          if(data.id === this.state.sel_id){
            return data; // _title= data.title; // _desc= data.desc;
            }
          i= i + 1; 
        }
      }
      get_data(){
        var _title, _desc, _arti, getData = null;

          if(this.state.mode === 'welcome'){
            _title = this.state.welcome.title;
            _desc = this.state.welcome.desc;
            _arti = <Arti title={_title} desc={_desc}></Arti>;
          } 
          else if(this.state.mode === 'sub'){
            _title = this.state.subject.title;
            _desc = this.state.subject.sub;
            _arti = <Arti title={_title} desc={_desc}></Arti>;
          } 
          else if(this.state.mode === 'read'){
            getData = this.get_read();
            _arti = <Arti title={getData.title} desc={getData.desc}></Arti>;
          } 
          else if(this.state.mode === 'create'){
            _arti = <FormCr title={this.state.mode} 
              onSubmit={function(_title, _desc){
                  this.max_id = this.max_id + 1;
                  var _contents = Array.from(this.state.contents);
                      // var _contents = this.state.contents.concat(); //without Array.from 
                  _contents.push({id:this.max_id, title:_title, desc:_desc});
                  this.setState({ contents:_contents, 
                                  mode:'read',
                                  sel_id:this.max_id  });
                }.bind(this)
              }></FormCr>
          } 
          else if(this.state.mode === 'update'){
            getData = this.get_read();
            _arti = <FormUp title={this.state.mode} 
              data={getData}
              onSubmit={function(_id, _title, _desc){
                var _contents = Array.from(this.state.contents);
                // var _contents = this.state.contents.concat({id:this.max_id, title:_title, desc:_desc} );
                var i = 0;
                while(i < _contents.length){
                  if(_contents[i].id === _id){
                    _contents[i] = {id:_id, title:_title, desc:_desc};
                    break;
                  } i = i+1;
                }
                this.setState({ contents:_contents,
                                mode:'read'   });
              }.bind(this)
            }></FormUp>
          }

        return _arti;
      }

    render(){
      return (
        <div className="App">
          <Subj 
            title={this.state.subject.title}
            sub={this.state.subject.sub} 
            onChangePage={function(){
              this.setState({mode:'sub'});
            }.bind(this)}
          ></Subj>
          <Navi 
            data={this.state.contents}
            onChangePage={function(id){
              this.setState({mode:'read', sel_id:Number(id)});
            }.bind(this)}
          ></Navi>
          <Cntrl 
            onChangeMode={function(_mode){
              if(_mode === 'delete'){
                var _contents = Array.from(this.state.contents);
                var i=0;
                while(i < _contents.length){
                  if(_contents[i].id === this.state.sel_id ){
                    _contents.splice(i, 1);
                    break;
                  } i= i+1;
                }
                this.setState({
                  mode:'welcome',
                  contents:_contents
                });
              } else {
                this.setState({mode:_mode});
              }
            }.bind(this)}
          ></Cntrl>
          {this.get_data()}
              {/* <Arti title="HTML" desc="HTML is HyperText Markup Language"> </Arti> */}
              {/* <Arti title={this.state.contents[2].title} desc={this.state.contents[2].desc}> </Arti> */}
        </div>
      );
  }
}
export default App;