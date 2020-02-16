import React,{Component} from 'react'
import {keys} from "lodash"
import AboutSlot from '../../../Portal/SlotMenu/AboutSlot'

import cart from './cart.png'

import CartBarMenu from "./CartBarMenu/CartBarMenu"

const productsMap = AboutSlot.reduce((accObj,slot)=>({
    ...accObj,
    [slot.id]:slot
}),{})

class Cart extends Component{
    
    render()
    
    {
        const{
            SlotInCart,
            visibility,
            MakeVisible
        }=this.props
        return (
            <div className="cart">
                <input value={keys(SlotInCart).reduce((total,ids)=>(total+SlotInCart[ids]),0)<=99?keys(SlotInCart).reduce((total,ids)=>(total+SlotInCart[ids]),0):"99+"} readOnly className="Num"/>
                <button onClick={()=>MakeVisible()}><img src={cart}/></button>
                <input className="ForTotal" value={keys(SlotInCart).reduce((total,ids)=>(total+productsMap[ids].price*SlotInCart[ids]),0)+"$"} readOnly/>
                <CartBarMenu
                    SlotInCart={SlotInCart}
                    visibility={visibility}
                />
            </div>
        );
    }
  }
  export default Cart