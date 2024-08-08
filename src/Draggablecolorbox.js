import React from "react";
import DeleteIcon from '@material-ui/icons/Delete'
import { withStyles } from "@material-ui/core";
import transitions from "@material-ui/core/styles/transitions";
import { SortableElement} from "react-sortable-hoc";
import styles from "./styles/Draggablecolorboxstyles";
const Draggablecolorbox=SortableElement((props)=>{
    return(<div style={{backgroundColor:props.color}} className={props.classes.root}>
        <div className={props.classes.Boxcontent}>
       <span > {props.name}</span>
       <span><DeleteIcon className={props.classes.DeleteIcon} onClick={props.delete}/></span>
        </div>
        </div>
)
})

export default withStyles(styles)(Draggablecolorbox);