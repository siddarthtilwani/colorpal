import React, { Component } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Picker from '@emoji-mart/react';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';

class PaletteMetaForm extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
     stage:'form',
     
     newPaletteName:""
    };
    this.handleClickOpen = this.handleClickOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handlechange=this.handlechange.bind(this)
    this.handlesubmit=this.handlesubmit.bind(this)
    this.showemojipicker=this.showemojipicker.bind(this)
    this.savepalette=this.savepalette.bind(this)
  }
  componentDidMount(){
    ValidatorForm.addValidationRule("ispalnameunique",value=>(
        this.props.palettes.every(({paletteName})=>
paletteName.toLocaleLowerCase()!==value.toLocaleLowerCase()


        
        )
    ))
} handlechange(evt) {
    this.setState({
        [evt.target.name]: evt.target.value
    })
}
handlesubmit() {
    this.props.savePalette(this.state.newPaletteName);
    this.handleClose();
  }
  handleClickOpen() {
    this.setState({ open: true });
  }

  handleClose() {
    this.setState({ open: false });
  }

  handleChange(event) {
    this.setState({ email: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log(this.state.email);
    this.handleClose();
  }
  showemojipicker(){
    this.setState({
        stage:'emoji'
    })
  }
  savepalette(emoji){
    console.log(emoji.native)
    const newPalette={
        paletteName:this.state.newPaletteName,
        emoji:emoji.native,
    }
    this.props.savePalette(newPalette)
    this.setState({
      stage:''
    })
  }

  render() {
    const {newPaletteName}=this.state
    return (
     <div>
         <React.Fragment>
       <Dialog open={this.state.stage==='emoji'} onClose={this.props.handleclose}>
        <DialogTitle>
            choose a palette emoji
        </DialogTitle>
       <Picker onEmojiSelect={this.savepalette} title="pick a palette emoji"/>
       </Dialog>
       <Dialog open={this.state.stage==='form'} onClose={this.props.handleclose}>
       <ValidatorForm  onSubmit={this.showemojipicker}> 
           <DialogTitle>new paletteName</DialogTitle>
           <DialogContent>
             <DialogContentText>
               enter a new palette name and make sure its unique
             </DialogContentText>
             
                       
                         
           </DialogContent>
           
           <TextValidator validators={["required","ispalnameunique"]} errorMessages={["this is required and can not be empty","palette name must be unique"]} label="new pal name" name='newPaletteName' onChange={this.handlechange} value={this.state.newPaletteName}/>
                      
           <DialogActions>
             <Button onClick={this.props.handleclose}>Cancel</Button>
             <Button  variant='contained' color='primary' type='submit'>save</Button>
           </DialogActions>
           </ValidatorForm>
       </Dialog>
     </React.Fragment>
     </div>
    );
  }
}

export default PaletteMetaForm;
