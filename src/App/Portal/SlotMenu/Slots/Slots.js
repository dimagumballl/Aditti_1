import PropTypes from 'prop-types'
import React,{Component} from 'react';
import {keys} from "lodash"
import {Link} from 'react-router-dom'

class Slots extends Component {
    
    state={
        Mimage:this.props.image[0]
    }
    Cheinge=(id)=>{
        this.setState(()=>(
            {
                Mimage:this.props.image[id]
            }
        ))
    }
    render ()
        
        {
            const{
                id,
                name,
                price,
                image,
                AddSlot
            }=this.props
            return(
            <div className="Slot">
                <Link to={'/Slot/'+id}><img src={this.state.Mimage}/></Link>
                <input value={name} readOnly/>
                <ul className="ItemColor">
                    {
                        keys(image).map((id)=>(
                        <li key={this.id+"."+id}>
                            <img src={image[id]} onClick={()=>this.Cheinge(id)}/>
                        </li>
                        ))
                        
                    }
                    
                </ul>
                <input value={price+"$"} readOnly />
                <button className="toCart" onClick={()=>AddSlot(id)}>В КОРЗИНУ</button>
            </div>)
        }
  }

Slots.defaultProps={
    image:['/Item/Noimg.png']
}

  export default Slots