import React from 'react';
import {Link} from 'react-router-dom'

import logo from './logo.png'

import Search from './Search/Search'
import Cart from './Cart/Cart'

function TopHead({
    SlotInCart,
    visibility,
    MakeVisible
}) {
    return (
        <ul className="TopHead">
            <li>
                <div className="row_0_1">
                    <Link to="/"><img src={logo}/></Link>
                </div>
            </li>
            <li>
                <div className="row_0_6">
                    <Search/>
                </div>
            </li>
        <li>
            <div className="row_0_1">
                <Cart
                MakeVisible={MakeVisible}
                SlotInCart={SlotInCart}
                visibility={visibility}
                />
            </div>    
        </li>
    </ul>
    );
  }
  export default TopHead