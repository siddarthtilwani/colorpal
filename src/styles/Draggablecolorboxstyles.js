import transitions from "@material-ui/core/styles/transitions";
import sizes from "./sizes";
import chroma from 'chroma-js'
const styles={
    root:{
        height: "25%",
        width: "20%",
        display: "inline-block",
        margin: "0 auto",
        position: "relative",
        cursor: "pointer",
        marginBottom: "-3.5px",
        "& svg:hover":{
            color: "white",
            transform:"scale(1.3)"
        },
        [sizes.down('lg')]:{
            width: "25%",
            height: "20%"
        },
        [sizes.down('md')]:{
            width: "50%",
            height: "10%"
        },[sizes.down('sm')]:{
            width: "100%",
            height: "5%"
        }
    },
    Boxcontent:{
        position: 'absolute',
        bottom: 0,
        left: 0,
        width: '100%',
        padding: 10,
        color: props => chroma(props.color).luminance() <= 0.05 ? "rgba(255,255,255,0.8)" : "(0,0,0,0.5)",
        letterSpacing: 1,
        textTransform: 'uppercase',
        fontSize: 12,
        display:"flex",
        justifyContent:"space-between",
        alignItems:"center"

    },
    DeleteIcon:{
transition:'all 0.3s ease-in-out'
    }
}
export default styles