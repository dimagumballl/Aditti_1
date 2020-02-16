import React,{Component} from 'react'

import Slots from '../SlotMenu/Slots/Slots'
import AboutSlot from '../SlotMenu/AboutSlot'

import '../SlotMenu/menu.css'

 class Search extends Component{
     
     render(){
        const{
            AddSlot,
            match,
            Nmae=match.match.params.name
         }=this.props
         
     return(
        <div className="SlotMenu">
 
            {   
                    AboutSlot.map(({
                        id,
                        name,
                        description,
                        price,
                        image,
  
                    })=>(name==Nmae?
                            <Slots
                                id={id}
                                name={name}
                                description={description}
                                price={price}
                                image={image}
                                AddSlot={AddSlot}
                                key={id} 
                            />:""

                    ))
                }
        </div>
     )}
 }
 export default Search