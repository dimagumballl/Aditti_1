import React,{Component} from 'react'
import {keys} from 'lodash'

import AboutSlot from '../SlotMenu/AboutSlot'

import './SlotPage.css'


const productsMap = AboutSlot.reduce((accObj,slot)=>({
    ...accObj,
    [slot.id]:slot
}),{})


var Mimage=undefined

class SlotPage extends Component{
        state={
            ID:0

        }
    Cheinge=(id)=>{
        this.setState(()=>({ID:[id]
            }))  
            }        
    
        
       
               
            
    
    
     render(){
       
    const{
        AddSlot,
        match,
        SlotInCart,
        ids=match.match.params.id
    }=this.props
    return(
        
        <div className="SlotPageMenu" key={ids}>

            <div className="SlotPageMenuImg">
                <div className="SlotPageMenuImgBar">
                    {productsMap[ids].image==undefined?"Нет изображений":keys(productsMap[ids].image).map((id)=>(
                        <li key={ids+"."+id}>
                            <img src={productsMap[ids].image[id]} onClick={()=>this.Cheinge(id)}/>
                        </li>
                    ))}
                </div>
                <div className="SlotPageMenuImgMenu" key={ids}>
                    <img src={productsMap[ids].image==undefined?SlotPage.defaultProps.image[0]:productsMap[ids].image[this.state.ID]==undefined?productsMap[ids].image[0]:productsMap[ids].image[this.state.ID]}/>
                </div>
            </div>
            <div className="SlotPageMenuInfo">
                <div className="Description">
                        <h1>{productsMap[ids].name}</h1>
                    {productsMap[ids].description==undefined?"Нет описания...":productsMap[ids].description}
                </div>
                <div className="SlotPageMenuCartInfo">
                        Цена:{productsMap[ids].price+"$"}
                        <br></br>

                        {SlotInCart[ids]==undefined?"Товар небыл помещен в корзину":
                        <div>
                            {"Товар  в корзине количеством:"+SlotInCart[ids]}
                        </div>}
                </div>
                <button className="AddToCart" onClick={()=>AddSlot(ids)}>Добавить</button>
            </div>
        </div>
    )}
}
SlotPage.defaultProps={
    image:['/Item/Noimg.png']
}
export default SlotPage