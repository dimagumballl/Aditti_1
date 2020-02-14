import React from 'react'
import './Forbar.css'
import AboutSlot from '../../../../Portal/SlotMenu/AboutSlot'
import {keys} from 'lodash'
import {Link} from 'react-router-dom'

const productsMap = AboutSlot.reduce((accObj,slot)=>({
    ...accObj,
    [slot.id]:slot

}),{})

function CartBarMenu({
    SlotInCart,
    visibility,
}){
    
    return(
        <div>
            
            <div className={visibility?"CartBarMenu":"CartBarMenuNone"}>
        <Link to="/cart"><button>В корзину</button></Link>       
        {keys(SlotInCart).map((id)=>(
            <Link to={'/Slot/'+id} key={id}>
                <div className="SlotBar" key={id}>
                    <img src={productsMap[id].image==undefined?CartBarMenu.defaultProps.image[0]:productsMap[id].image[0]}/>
                    <div className="barinfo">
                        {productsMap[id].name}({productsMap[id].price+"$)"}
                        <br></br>
                        Количество:{SlotInCart[id]<=99?SlotInCart[id]:"99+"}
                    </div>
                    <br></br>
                </div>
            </Link>
            
        ))}
        
    </div>
    </div>
        
        
    )
}
CartBarMenu.defaultProps={
    image:['/Item/Noimg.png']
}
export default CartBarMenu