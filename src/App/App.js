import React, { Component } from 'react'
import {omit} from 'lodash'

import '../common/style/style.css'

import Header from './Header/Header'
import Portal from './Portal/Portal'
import Footer from './Footer/Footer'


class App extends Component {
  state={
    SlotInCart:{

    },
    visibility:false
  }
  
    

  AddSlot=(id)=>{
    this.setState((prevState)=>({
      SlotInCart:{
				...prevState.SlotInCart,
			[id]:(prevState.SlotInCart[id] || 0)+1
			}
		}))
  }
  MinSlot=(id)=>{
    this.setState((prevState)=>({
      SlotInCart:{
				...prevState.SlotInCart,
			[id]:(prevState.SlotInCart[id] || 0)-1
			}
		}))
  }
        
    MakeVisible=()=>{

        this.setState((prevState)=>({
                visibility:!prevState.visibility
            }))
    }
    MakeVisible2=()=>{

      this.setState((prevState)=>({
              visibility:prevState.visibility
          }))
  }
    DeletSlot=(ids)=>{
      this.setState((prevState)=>({
        SlotInCart:{
          ...omit(prevState.SlotInCart,ids)
        }
    }))
    }
  render ()
    {
      return (
        <div className="App" onClick={this.state.visibility?()=>this.MakeVisible():()=>this.MakeVisible2()}>
          
          <Header
          SlotInCart={this.state.SlotInCart}
          visibility={this.state.visibility}
          MakeVisible={this.MakeVisible}
          />
          <Portal
          AddSlot={this.AddSlot}
          SlotInCart={this.state.SlotInCart}
          MinSlot={this.MinSlot}
          DeletSlot={this.DeletSlot}
          />
          <Footer/>
          
        </div>
    );
  }
}

export default App;
