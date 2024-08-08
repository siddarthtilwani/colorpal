import React,{Component} from "react";
import { Link } from "react-router-dom";
import Minipal from './minipal'
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import ListItemText from "@material-ui/core/ListItemText";
import CheckIcon from "@material-ui/icons/Check";
import { blue
 } from "@material-ui/core/colors";
 import {red} from "@material-ui/core/colors";
import CloseIcon from "@material-ui/icons/Close";
import { withStyles } from "@material-ui/core";
import {CSSTransition,TransitionGroup} from 'react-transition-group'
import styles from './styles/PaletteListstyles'

class Palettelist extends Component{
    constructor(props){
        super(props);
        this.state={
            dialogboxopen:false,
            deletingId:""
        }
        this.openhandle=this.openhandle.bind(this)
        this.closehandle=this.closehandle.bind(this)
        this.handleDelete=this.handleDelete.bind(this)
    }
    openhandle(id){
        this.setState({
            dialogboxopen:true,deletingId:id
        })
    }
    closehandle(){
        this.setState({
            dialogboxopen:false,deletingId:""
        })
    }
    handleDelete(){
        this.props.deletePal(this.state.deletingId)
        // this.setState({
        //     dialogboxopen:false,deletingId:""
        // })
        this.closehandle()
    }
    render(){
        
        const {palettes,classes}=this.props;
        return(
            <div className={classes.root}>
                <div className={classes.container}>
                    <nav className={classes.nav}>
                    <h1 className={classes.heading}>react colors</h1>
                  <div>
                  <Link to='palette/new'>create palette   </Link>
                  </div>
                    </nav>
                    <TransitionGroup className={classes.palettes}>
                        {palettes.map(palette => (
                            <CSSTransition key={palette.id} timeout={2000} classNames="fade">
                                <Link to={`palette/${palette.id}`}>
                                    <Minipal id={palette.id} openDialog={this.openhandle} {...palette} />
                                </Link>
                            </CSSTransition>
                        ))}
                    </TransitionGroup>
                </div>      
                <Dialog open={this.state.dialogboxopen} aria-labelledby="delete-palette-dialog" onClose={this.closehandle}> 
                    <DialogTitle id="delete-palette-dialog">delete this palette</DialogTitle>
                    <List>
                        <ListItem button onClick={this.handleDelete}>
                            <ListItemAvatar >
                                <Avatar style={{background:red[200],color:red[600]}} >
                                    <CheckIcon />
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText primary='delete'/>
                        </ListItem>
                        <ListItem onClick={this.closehandle} button >
                            <ListItemAvatar>
                                <Avatar style={{background:blue[200],color:blue[600]}}>
                                    <CloseIcon/>
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText primary='cancel'/>
                        </ListItem>
                    </List>
                </Dialog>
              
            </div>
            
        )
    }
}
export default withStyles(styles)(Palettelist);