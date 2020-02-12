import React from 'react';

import search from './search.png'

function Search() {
    return (
        <div className="search">
            <input type="text"/>
            <button><img src={search} width="30px" height="30px"/></button>
        </div>
    );
  }
  export default Search