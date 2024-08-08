import { withStyles } from "@material-ui/core";
import React, { PureComponent } from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import styles from "./styles/Minipalstyles";

class Minipal extends PureComponent{
    constructor(props){
        super(props);
        this.delete=this.delete.bind(this)
    }
    delete(e){  // e.stopPropagation()
        ;
        e.preventDefault()
        // console.log(e.target)
        this.props.openDialog(this.props.id)
    }
    render(){
        const {classes,paletteName,emoji,colors}=this.props;
        console.log(`rendering ${this.props.id}`)
    const miniColorBoxes=colors.map(color=>(
        <div className={classes.minibox} key={color.name} style={{backgroundColor:color.color}}/>
    ))
    return(
        <div className={classes.root}>
           
            <DeleteIcon className={classes.deleteicon} style={{transition:'all 0.3s ease-in-out'}} onClick={this.delete} />
            <div className={classes.color}>
{miniColorBoxes}
            </div>
            <h5 className={classes.title}>
                {paletteName}<span className={classes.emoji}>{emoji}</span>
            </h5>
        </div>
    )
}
}
export default withStyles(styles)(Minipal);