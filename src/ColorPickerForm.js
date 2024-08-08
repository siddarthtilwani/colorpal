
import React, { Component } from 'react';

import { withStyles } from '@material-ui/core';

import { ChromePicker } from "react-color"
import Button from '@material-ui/core/Button';

import { ValidatorForm, TextValidator } from "react-material-ui-form-validator"

import styles from './styles/ColorPickerFormstyles';
class ColorPickerForm extends Component{
    constructor(props){
        super(props);
        this.state={
currentclr:"teal",newColorName: "",
        }
        this.updatecolor=this.updatecolor.bind(this)
        this.handlesubmit=this.handlesubmit.bind(this)
        this.handlechange=this.handlechange.bind(this)
    }
    componentDidMount(){
        ValidatorForm.addValidationRule("iscolornameunique",value=>(
            this.props.colors.every(({name})=>
    name.toLowerCase()!==value.toLowerCase()
    
    
            
            )
        ))
        ValidatorForm.addValidationRule("iscolorunique",value=>(
            this.props.colors.every(({color})=>
    color!==this.state.currentclr
    
    
            
            )
        )) 
       
       
    }
    updatecolor(newcolor) {
        // console.log(newcolor)
        this.setState({ currentclr: newcolor.hex });
    }
    handlechange(evt) {
        this.setState({
            [evt.target.name]: evt.target.value
        })
    }
    handlesubmit(){
        const Newcolor={
            name:this.state.newColorName,color: this.state.currentclr,
        }
        this.props.addnewcolor(Newcolor)
        this.setState({
            newColorName:""
        })
    }
    render(){
        const {ispalettefull,classes}=this.props

        return(
            <div>
 
                  <ChromePicker className={classes.picker} color={this.state.currentclr} onChangeComplete={this.updatecolor} />
                  <ValidatorForm instantValidate={false} onSubmit={this.handlesubmit}>
                      <TextValidator placeholder='color name' className={classes.colorInput} value={this.state.newColorName} name='newColorName' onChange={this.handlechange} 
                      validators={["required","iscolornameunique","iscolorunique"]}
                      errorMessages={["this field is required","enter a unique color name","same color already present"]} variant="filled" margin="normal"
                      />

                      <Button className={classes.addcolor} disabled={ispalettefull} variant='contained' color='primary' type='submit' style={{ backgroundColor: ispalettefull ?  'grey' : this.state.currentclr}}>{ispalettefull?'pallete is full':'add color'}</Button>


                  </ValidatorForm>

            </div>
        )
    }
}
export default withStyles(styles)(ColorPickerForm);