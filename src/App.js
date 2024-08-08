import React, { Component } from 'react';
import { Route, Routes, json, useLocation } from "react-router-dom"
import Pallete from './Pallete';
import seedColors from './seedColors';
import Palettelist from './Palettelist';
import PaletteWrapper from './PaletteWrapper';
import { generatePalette } from './colorHelpers'
import SingleColorPalette from './SingleColorPalette'
import './App.css'
import Singlepalwrapper from './Singlepalwrapper';
import NewPalettefrom from './NewPaletteform';
import { CSSTransition }from 'react-transition-group';
import { TransitionGroup } from 'react-transition-group';
import Page from './Page';
class App extends Component {
  constructor(props) {
    super(props);
    const savedpal=JSON.parse(window.localStorage.getItem('palettes'))
    
    this.state={
      palettes:savedpal || seedColors 
    }
    this.findPalette = this.findPalette.bind(this);
    this.savePalette=this.savePalette.bind(this);
    this.deletePal=this.deletePal.bind(this)
  }


deletePal(id){
  const newpal=this.state.palettes.filter(palette=>palette.id!==id)
  this.setState({
  palettes:newpal
  },this.synclocalstorage)
}


  findPalette(id) {
    // console.log("sjdfdhgskdhfgldh")
    let a = this.state.palettes.find(function (pallt) {
      return pallt.id === id;
    })
    // console.log(a);
    return a;
  }
  savePalette(newPalette){
    // console.log(newPalette);
   this.setState({
    palettes:[...this.state.palettes,newPalette]
   },
  this.synclocalstorage)
  }
  synclocalstorage(){
    window.localStorage.setItem('palettes',JSON.stringify(this.state.palettes))
  }
  render() {

    // console.log(generatePalette(seedColors[4]))
    return (
      <RouteTransition>
      <Routes>
        <Route path='/palette/new' element={<Page><NewPalettefrom palettes={this.state.palettes} savePalette={this.savePalette}/></Page>}/>
        <Route  path='/' element={<Page><Palettelist deletePal={this.deletePal} palettes={this.state.palettes} /></Page>} />
        <Route path='/palette/:id' element={
   <Page><PaletteWrapper  findPalette={this.findPalette} generatePalette={generatePalette} /></Page>
}/>
<Route path='/palette/:paletteId/:colorId' element={<Page><Singlepalwrapper findPalette={this.findPalette} generatePalette={generatePalette}/></Page>}/>

      </Routes>
      </RouteTransition>
      // <div className="App">

      // <Pallete  palette={generatePalette(seedColors[4])}/>
      // </div>
    );
  }
}


function RouteTransition({children}){
  const location= useLocation()
  return( <TransitionGroup>
<CSSTransition key={location.key} classNames='fade' timeout={500}>
  {children}
</CSSTransition>
  </TransitionGroup>)
}

export default App;
