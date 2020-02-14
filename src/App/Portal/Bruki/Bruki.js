import React from 'react'

import '../SlotMenu/menu.css'

import Slots from '../SlotMenu/Slots/Slots'
import AboutSlot from '../SlotMenu/AboutSlot'

function Bruki({
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
                        Bruki
                    })=>(Bruki!=undefined?
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
  
  export default Bruki