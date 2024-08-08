import React, { Component } from 'react';
import clsx from 'clsx';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';

import withRouter from './withRouter';

import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';

import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';


import { Typography } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator"
import Draggablecolorlist from './Draggablecolorlist';
import { arrayMove } from 'react-sortable-hoc';
import seedcolors from './seedColors'
import PaletteFormNav from './PaletteFormNav';
import ColorPickerForm from './ColorPickerForm';
import styles from './styles/NewPaletteformstyles';
const drawerWidth = 400;


class NewPaletteform extends Component {
    static defaultProps={
        maxColors:20
    }
    constructor(props) {
        super(props);
        this.state = {
            open: false,
            colors: seedcolors[0].colors,
            currentclr: "teal",
            
            
        };
        this.handleDrawerOpen = this.handleDrawerOpen.bind(this);
        this.handleDrawerClose = this.handleDrawerClose.bind(this);
       
        this.addnewcolor = this.addnewcolor.bind(this)
        this.handlechange = this.handlechange.bind(this)
        this.savePalette=this.savePalette.bind(this)
        this.remove=this.remove.bind(this)
        this.clearpal=this.clearpal.bind(this)
        this.generaterandom=this.generaterandom.bind(this)
    }
componentDidMount(){
    ValidatorForm.addValidationRule("iscolornameunique",value=>(
        this.state.colors.every(({name})=>
name.toLowerCase()!==value.toLowerCase()


        
        )
    ))
    ValidatorForm.addValidationRule("iscolorunique",value=>(
        this.state.colors.every(({color})=>
color!==this.state.currentclr


        
        )
    )) 
   
   
}
    handleDrawerOpen() {
        this.setState({ open: true });
    }

    handleDrawerClose() {
        this.setState({ open: false });
    }
   
    addnewcolor(Newcolor) {
       
        this.setState({
            
            colors: [...this.state.colors, Newcolor],newColorName:""
        })
    }
    handlechange(evt) {
        this.setState({
            [evt.target.name]: evt.target.value
        })
    }
    savePalette(newPalette){
        newPalette.id=newPalette.paletteName.toLocaleLowerCase().replace(/ /g,'-')
        newPalette.colors=this.state.colors
      
        this.props.savePalette(newPalette)
        this.props.navigate('/')
    }
    delete(id){
        console.log(id)
        alert("hi")
    }
    remove(colorName){
        this.setState({
        colors:this.state.colors.filter((e)=>(e.name!==colorName))
        })
    }
    clearpal(){
        this.setState({
            colors:[]
        })
    }

    onSortEnd=({oldIndex,newIndex})=>{
        this.setState(({colors})=>(
            {
                colors:arrayMove(colors,oldIndex,newIndex)
            }
        ))
    }
    generaterandom(){
        const allColors=this.props.palettes.map(colors=>(
            colors.colors
        )).flat();
        let rand
        let randcolor
        let isduplicate=true
        while(isduplicate){
            rand=Math.floor(Math.random() *allColors.length)
            randcolor=allColors[rand]
            isduplicate=this.state.colors.some(color=>(color.name===randcolor.name))
           
        }
        this.setState({
            colors:[...this.state.colors,randcolor]
        })
      
    }
    render() {
        const { classes, theme } = this.props;
        const { open } = this.state;
        const ispalettefull=this.state.colors.length>=this.props.maxColors
        return (
            <div className={classes.root}>
                <PaletteFormNav open={this.state.open} handleDrawerOpen={this.handleDrawerOpen} savePalette={this.savePalette} palettes={this.props.palettes} />
                <Drawer
                    className={classes.drawer}
                    variant="persistent"
                    anchor="left"
                    open={open}
                    classes={{
                        paper: classes.drawerPaper,
                    }}
                >
                    <div className={classes.drawerHeader}>
                        <IconButton onClick={this.handleDrawerClose}>
                            {<ChevronLeftIcon />}
                        </IconButton>
                    </div>
                    <Divider />
                    <div className={classes.container}>
                    <Typography variant='h4' gutterBottom>design your palette</Typography>
                  
                  <div className={classes.Buttons}><Button className={classes.Button} variant='contained' onClick={this.clearpal} color='secondary'>clear Palette</Button>
                      <Button className={classes.Button} disabled={ispalettefull} variant='contained' color='primary' onClick={this.generaterandom}>random color</Button>
                  </div>
                    </div>
                   <ColorPickerForm colors={this.state.colors} addnewcolor={this.addnewcolor} ispalettefull={ispalettefull} maxColors={this.props.maxColors} />

                    <Divider />

                </Drawer>
                <main
                    className={clsx(classes.content, {
                        [classes.contentShift]: open,
                    })}
                >
                    <div className={classes.drawerHeader} />
<Draggablecolorlist distance={20} colors={this.state.colors} remove={this.remove} onSortEnd={this.onSortEnd} axis='xy'/>

                </main>
            </div>
        );
    }
}

export default withStyles(styles, { withTheme: true })(withRouter(NewPaletteform));
