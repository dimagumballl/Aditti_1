import React from 'react'
import {Route} from 'react-router-dom'

import SlotMenu from './SlotMenu/SlotMenu'
import CartPage from './CartPage/CartPage'
import SlotPage from './SlotPage/SlotPage'
import HelpPage from './HelpPage/HelpPage'

import Bluzka from './Bluzka/Bluzka'
import Bruki from './Bruki/Bruki'
import Dzins from './Dzins/Dzins'
import Obuv from './Obuv/Obuv'
import Platty from './Platty/Platty'
import Sumka from './Sumka/Sumka'
import VerhOdezda from './VerhOdezda/VerhOdezda'
import Vyzanoe from './Vyzanoe/Vyzanoe'

import Search from './Search/Search'


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
        <Route path="/Bluzka" render={()=>(
            <Bluzka 
                AddSlot={AddSlot}
            />
        )}/>
        <Route path="/Search/:name" render={(props)=>(
            <Search
                AddSlot={AddSlot}
                match={props}
            />
        )}/>
        <Route path="/Bruki" render={()=>(
            <Bruki 
                AddSlot={AddSlot}
            />
        )}/>
        <Route path="/Dzins" render={()=>(
            <Dzins
                AddSlot={AddSlot}
            />
        )}/>
        <Route path="/Obuv" render={()=>(
            <Obuv
                AddSlot={AddSlot}
            />
        )}/>
        <Route path="/Platty" render={()=>(
            <Platty
                AddSlot={AddSlot}
            />
        )}/>
        <Route path="/Sumka" render={()=>(
            <Sumka
                AddSlot={AddSlot}
            />
        )}/>
        <Route path="/VerhOdezda" render={()=>(
            <VerhOdezda
                AddSlot={AddSlot}
            />
        )}/>
        <Route path="/Vyzanoe" render={()=>(
            <Vyzanoe
                AddSlot={AddSlot}
            />
        )}/>
        <Route path='/Help' render={()=>(
            <HelpPage/>
        )}/>
        <Route path="/cart" render={()=>(
            <CartPage
                AddSlot={AddSlot}
                SlotInCart={SlotInCart}
                MinSlot={MinSlot}
                DeletSlot={DeletSlot}
            />
        )}/>
        <Route path="/Slot/:id"  render={(props)=>(
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