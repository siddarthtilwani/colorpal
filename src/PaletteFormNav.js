import React, { Component } from "react";
import clsx from 'clsx';
import { withStyles } from "@material-ui/core";
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

import Typography from '@material-ui/core/Typography';

import IconButton from '@material-ui/core/IconButton';

import AddToPhotos from '@material-ui/icons/AddToPhotos'
import Button from '@material-ui/core/Button';

import { ValidatorForm, TextValidator } from "react-material-ui-form-validator"

import { Link } from 'react-router-dom';
import PaletteMetaForm from "./PaletteMetaForm";
import styles from "./styles/PaletteFormNavstyles";

const drawerWidth = 400;



 class PaletteFormNav extends Component{
    constructor(props){
        super(props);
        this.state = {
            newPaletteName:"", showForm: false
        }
        this.handlechange=this.handlechange.bind(this)
        this.showForm=this.showForm.bind(this)
        this.handleclose=this.handleclose.bind(this)
    }
 
    handlechange(evt) {
        this.setState({
            [evt.target.name]: evt.target.value
        })
    }
    showForm() {
        this.setState({ showForm: true });
    }
    handleclose(){
        this.setState({showForm:false})
    }

    render(){
        const{classes,open}=this.props
   return(
    <div className={classes.root}>
<CssBaseline />
                <AppBar
                    position="fixed"
                    color='contained'
                  
                    className={clsx(classes.appBar, {
                        [classes.appBarShift]: open,
                    })}
                >
                    <Toolbar>
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            onClick={this.props.handleDrawerOpen}
                            edge="start"
                            className={clsx(classes.menuButton,{ [ classes.hide]:open})}
                        >
                            <AddToPhotos/>
                          
                        </IconButton>
                        <Typography variant="h6" noWrap>
                            new palette
                        </Typography>

                        
                    </Toolbar>
                    <div className={classes.navBtn}>
                   
                          
                          
                        < Link style={{textDecoration:'none'}} to='/'><Button variant='contained' color='secondary' className={classes.btn}>go back</Button></Link>
                        <Button className={classes.btn} variant="contained" color="primary" onClick={this.showForm}>
         save
        </Button>
        </div>
                </AppBar>
            { this.state.showForm &&   <PaletteMetaForm handleclose={this.handleclose} palettes={this.props.palettes} savePalette={this.props.savePalette}/>}
    </div>
   )
    }

}
export default withStyles(styles, { withTheme: true })(PaletteFormNav);
