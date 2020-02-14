import React from 'react'

import '../SlotMenu/menu.css'

import Slots from '../SlotMenu/Slots/Slots'
import AboutSlot from '../SlotMenu/AboutSlot'

function Obuv({
    AddSlot
}) {
    return (
        <div className="SlotMenu">
            {   
                    AboutSlot.map(({
                        id,
                        name,
                        description,
                        price,
                        image,
                        Obuv
                    })=>(Obuv!=undefined?
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
    );
  }
  
  export default Obuv