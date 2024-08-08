import React,{Component} from "react";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import Slider from 'rc-slider'
import 'rc-slider/assets/index.css'
import  IconButton  from "@material-ui/core/IconButton";
// import './navbar.css'
import  Snackbar  from "@material-ui/core/Snackbar";
import CloseIcon from "@material-ui/icons/Close"
import { withStyles } from "@material-ui/core";
import { Link } from "react-router-dom";

import styles from './styles/Navbarstyles'

class  Navbar extends Component{
    constructor(props){
        super(props);
        this.state={
            format:"hex"
            ,open:false
        }
        this.handleformatchange=this.handleformatchange.bind(this)
        this.closeSnackbar=this.closeSnackbar.bind(this);
    }
    closeSnackbar(){
        this.setState({
            open:false
        })
    }
    handleformatchange(e){
        this.setState({
            format:e.target.value,open:true
        })
        this.props.handlechange(e.target.value)
    }
    render(){
        const {classes}=this.props
        return(
            <header className={classes.Navbar}>
                <div className={classes.Logo}>
                    <Link to='/'>reactcolorpicker</Link>
                 
                </div>
                {this.props.isslider &&   <div className="slider-container">
                    <span>level:{this.props.level}</span>
                <div className={classes.Slider}>
    <Slider  defaultValue={this.props.level} step={100} min={100} max={900} onAfterChange={this.props.handlechangelevel}/>
</div>
                </div>}
              
               

<div className={classes.Selectcontainer}>
    <Select value={this.state.format} onChange={this.handleformatchange}>
        
     <MenuItem value='hex'>HEX - #ffffff</MenuItem>
            <MenuItem value='rgb'>RGB - rgb(255,255,255)</MenuItem>
            <MenuItem value='rgba'>RGBA - rgba(255,255,255, 1.0)</MenuItem>
    </Select>
</div>
<Snackbar anchorOrigin={{vertical:"bottom",horizontal:"left"}}
open={this.state.open}
message={<span id="message-id">format changed to {this.state.format.toUpperCase()}</span>}
autoHideDuration={3000}
ContentProps={{
    "aria-describedby":"message-id"
}}
onClose={this.closeSnackbar}
action={
    [
<IconButton onClick={this.closeSnackbar} color="inherit" key='close' aria-label="close">
    <CloseIcon/>
</IconButton>
    ]
}
/>
            </header>
        )
    }
}
export default withStyles(styles)(Navbar);