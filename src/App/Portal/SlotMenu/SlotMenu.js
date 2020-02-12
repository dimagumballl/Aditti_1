import React from 'react'

import './menu.css'

import Slots from './Slots/Slots'
import AboutSlot from './AboutSlot'

function SlotMenu({
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
                        
                    })=>(
                            <Slots
                                id={id}
                                name={name}
                                description={description}
                                price={price}
                                image={image}
                                AddSlot={AddSlot}
                                key={id} 
                            />

                    ))
                }
            <div className="AddMore">
                <button>ПОКАЗАТЬ ЕЩЕ</button>
            </div>
        </div>
    );
  }
  
  export default SlotMenu