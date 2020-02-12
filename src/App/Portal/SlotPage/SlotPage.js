import React,{Component} from 'react'
import {keys} from 'lodash'

import AboutSlot from '../SlotMenu/AboutSlot'

import './SlotPage.css'

const productsMap = AboutSlot.reduce((accObj,slot)=>({
    ...accObj,
    [slot.id]:slot
}),{})


class SlotPage extends Component{
    state={
        Mimage:productsMap[this.props.match.match.params.id].image[0]
    }
    Cheinge=(id)=>{
        this.setState(()=>(
            {
                Mimage:productsMap[this.props.match.match.params.id].image[[id]]
            }
        ))
    }
    render()
    {
        
        const {
            match,
            SlotInCart,
            ids=match.match.params.id
        }=this.props
    return(
        
        <div className="SlotPageMenu">
            <div className="SlotPageMenuImg">
                <div className="SlotPageMenuImgBar">
                    {productsMap[ids].image==undefined?"Нет изображений":keys(productsMap[ids].image).map((id)=>(
                        <li key={ids+"."+id}>
                            <img src={productsMap[ids].image[id]} onClick={()=>this.Cheinge(id)}/>
                        </li>
                    ))}
                </div>
                <div className="SlotPageMenuImgMenu">
                    <img src={productsMap[ids].image==undefined?SlotPage.defaultProps.image[0]:this.state.Mimage}/>
                </div>
            </div>
            <div className="SlotPageMenuInfo">
                <div className="Description">
                    {productsMap[ids].description==undefined?"Нет описания...":productsMap[ids].description}
                </div>
                <div className="SlotPageMenuCartInfo">
                        Цена:{productsMap[ids].price+"$"}
                        <br></br>

                        {SlotInCart[ids]==undefined?"Товар небыл помещен в корзину":
                        <div>
                            {"Товар был помещен в корзину"}<br></br>{"Количество:"+SlotInCart[ids]}
                        </div>}
                </div>
            </div>
        </div>
    )}
}
SlotPage.defaultProps={
    image:['/Item/Noimg.png']
}
export default SlotPage