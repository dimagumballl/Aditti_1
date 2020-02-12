import React from 'react';

import './head.css'

import HeaderMenu from './HeaderMenu/HeaderMenu'
import TopHead from './TopHead/TopHead'

function Header({
    SlotInCart,
    visibility,
    MakeVisible
}) {
    return (
        <div className="header" >
            <TopHead
            MakeVisible={MakeVisible}
            SlotInCart={SlotInCart}
            visibility={visibility}
            />
            <HeaderMenu/>
        </div>
    );
  }
  export default Header