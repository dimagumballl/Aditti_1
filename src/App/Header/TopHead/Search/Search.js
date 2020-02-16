import React,{Component} from 'react';
import {Link} from 'react-router-dom'

import search from './search.png'

class Search extends Component {
    state={
        SearchValue:""
    }
    Change=(e)=>{
        this.setState(
            {
                SearchValue:e.target.value
            }
        )
    }
    render()
    {return (
        <div className="search">
            <input value={this.state.SearchValue} onChange={this.Change}/>
            <Link to={'/Search/'+this.state.SearchValue}><button><img src={search} width="30px" height="30px"/></button></Link>
        </div>
    )}
  }
  export default Search