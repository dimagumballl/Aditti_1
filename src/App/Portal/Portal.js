import React from 'react'
import {Route} from 'react-router-dom'

import SlotMenu from './SlotMenu/SlotMenu'
import CartPage from './CartPage/CartPage'
import SlotPage from './SlotPage/SlotPage'


function Portal({
    AddSlot,
    SlotInCart,
    MinSlot,
    DeletSlot
}){
    return(
    <div>
        <Route exact path="/" render={()=>(
            <SlotMenu 
                AddSlot={AddSlot}
            />
        )}/>
        <Route path="/cart" render={()=>(
            <CartPage
                AddSlot={AddSlot}
                SlotInCart={SlotInCart}
                MinSlot={MinSlot}
                DeletSlot={DeletSlot}
            />
        )}/>
        <Route  path="/Slot/:id"  render={(props)=>(
            <SlotPage
            AddSlot={AddSlot}
            match={props}
            SlotInCart={SlotInCart}
            />
        )}/>
    </div>
        )
    
}
export default Portal