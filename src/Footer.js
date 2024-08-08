import React from "react";
import { withStyles } from "@material-ui/core";
import styles from './styles/PaletteFooterstyles'
function Footer(props){
    const {classes}=props
    return(
        <footer className={classes.PaletteFooter}>
        {props.paletteName}
        <span className={classes.Emoji}>{props.emoji}</span>
    </footer>
    )
}
export default  withStyles(styles)(Footer);