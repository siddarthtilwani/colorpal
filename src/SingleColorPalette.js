import shadows from "@material-ui/core/styles/shadows";
import React, { Component } from "react";
import ColorBox from "./ColorBox";

import { colors } from "@material-ui/core";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import {withStyles} from "@material-ui/core";
import styles from './styles/Singlepalstyles'
class SingleColorPalette extends Component {
   constructor(props){
      super(props);
      console.log(this.props.palette)
    this._shades=this.gatherShades(this.props.palette,this.props.colorId)
   console.log(this._shades)
   console.log(this.props.colorId)
   this.state={
      format:'hex'
   }
   this.eventchangeformat=this.eventchangeformat.bind(this);
}
eventchangeformat(val){
   this.setState({
       format:val
   })
}
gatherShades(palette,colorToFilterBy){
      let shades=[];
      let allColors=palette.colors;
      for(let key in allColors){
         shades=shades.concat(
            allColors[key].filter(color=>color.id===colorToFilterBy)
         )
      }
      return shades.slice(1);
}
  render() {
   const {classes}=this.props
   const colorBoxes=this._shades.map(color=>(
      <ColorBox height="50%"  key={color.name} name={color.name} background={color[this.state.format]} showingFullPalette={false}/>   ))
    return (<div className={classes.Palclass}>
      <Navbar isslider={false} handlechange={this.eventchangeformat}/>
      
      <div className={classes.Palcolors}> 
         {colorBoxes}
         <div className={classes.goBack}>
         
            <Link  to={`/palette/${this.props.palette.id}`}>go back</Link>
         </div>
      </div>
      <Footer  paletteName={this.props.palette.paletteName} emoji={this.props.palette.emoji} />
      </div>
    );
  }
}

export default withStyles(styles)(SingleColorPalette);
