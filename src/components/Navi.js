import React from 'react';
import { Component } from 'react';

class Navi extends Component {
    shouldComponentUpdate(newProps, newState){
        // console.log(newProps.data, this.props.data);
        if(this.props.data === newProps.data){ return false; }
        return true;
    }
    render() {
        console.log('Navi rendring');
        var lists=[];
        var data = this.props.data;
        var i=0;
        while(i < data.length){
            lists.push(
                <li key={data[i].id}>   {/* for React system */}
                <a  href={"/content/"+ data[i].id}
                                // onClick={function(id, e){
                                //     this.props.onChangePage(id);
                                //     e.preventDefault();
                                // }.bind(this, data[i].id)}
                    data-id={data[i].id}
                    onClick={function(e){ 
                        // debugger;
                        e.preventDefault();
                        this.props.onChangePage(e.target.dataset.id);
                    }.bind(this)}
                >{data[i].title}</a></li>
            );
            i = i+1;
        }
        return (
            <nav>
                <ul>
                    {lists /*   <li><a href="1.html">HTML</a></li>
                                <li><a href="3.html">JS</a></li> */
                    }
                </ul>
            </nav>  
        );
    }
  }
  export default Navi;