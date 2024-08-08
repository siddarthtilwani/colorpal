import React,{Component} from 'react';
import ColorBox from './ColorBox';
import styles from '../src/styles/Palettestyles'
// import './Pallete.css'
import Navbar from './Navbar';
import seedColors from './seedColors';
import Footer from './Footer';
import { withStyles } from '@material-ui/core';



class Pallete  extends Component{
    constructor(props){
        super(props);
        this.state={
            level:500,format:'hex'
        }
        this.handlechangelevel=this.handlechangelevel.bind(this)
        this.eventchangeformat=this.eventchangeformat.bind(this)
    }
    eventchangeformat(val){
        this.setState({
            format:val
        })
    }
    handlechangelevel(e){
        console.log(e)
        this.setState({
            level:e
        })
    }
    render(){
        const{classes}=this.props;
console.log(this.props.palette)
const {id}=this.props.palette
        const colorBoxes=this.props.palette.colors[this.state.level].map(color=>(
            <ColorBox height="25%" background={color[this.state.format]} name={color.name} key={color.id} id={color.id} showingFullPalette={true} paletteId={id}/>
        ))
        console.log(this.props)
        return(
            <div className={classes.Palclass}>
                {/* {navabar} */}
              <Navbar isslider handlechange={this.eventchangeformat} level={this.state.level} handlechangelevel={this.handlechangelevel}/>

               <div className={classes.Palcolors}>
                    {colorBoxes}

                </div>
                {/* {footer} */}
<Footer paletteName={this.props.palette.paletteName} emoji={this.props.palette.emoji} />
              
            </div>
        )
    }
}

export default withStyles(styles)(Pallete);