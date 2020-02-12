import React from 'react'
import {keys} from 'lodash'

import './CartPage.css'

import CartSlots from './CartSlots/CartSlots'
import UnFull from './CartSlots/UnFull'

function CartPage({
    SlotInCart,
    AddSlot,
    MinSlot,
    DeletSlot
}){
    return(
        <div className="CartMenu">
            {
                keys(SlotInCart).length==0?<UnFull/>:
                    <CartSlots
                        MinSlot={MinSlot}
                        AddSlot={AddSlot}
                        SlotInCart={SlotInCart}
                        DeletSlot={DeletSlot}
                    />
            }
        </div>
    )
}

export default CartPage