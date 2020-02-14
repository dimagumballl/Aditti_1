import React from 'react'

import '../SlotMenu/menu.css'

import Slots from '../SlotMenu/Slots/Slots'
import AboutSlot from '../SlotMenu/AboutSlot'

function VerhOdezda({
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
                        VerhOdezda
                    })=>(VerhOdezda!=undefined?
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
  
  export default VerhOdezda