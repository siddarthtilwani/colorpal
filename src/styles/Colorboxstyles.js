import sizes from './sizes';
import chroma from 'chroma-js';
export default{
    ColorBox: {
        height: "25%",
        width: "20%",
        display: "inline-block",
        margin: "0 auto",
        position: "relative",
        cursor: "pointer",
        marginBottom: "-3.5px",
        "&:hover button": {
            opacity: "1"
        },
        [sizes.down('lg')]:{
            width: "25%",
            height:props=>(props.showingFullPalette? "20%":"33.3333%"),


        },
        [sizes.down('md')]:{
            width: "50%",
            height:props=>(props.showingFullPalette? "10%":"20%"),


        },
        [sizes.down('sm')]:{
            width: "50%",
            height:props=>(props.showingFullPalette? "10%":"50%"),


        },
        [sizes.down('xs')]:{
            width: "100%",
            height:props=>(props.showingFullPalette? "5%":"10%"),


        },
      
        
    },
    Morebtn: {
        color: props => chroma(props.background).luminance() >= 0.7 ? "rgba(0,0,0,0.5)" : "white",
        background: 'rgba(255, 255, 255, 0.3)',
        position: 'absolute',
        bottom: '0px',
        width: '60px',
        height: '30px',
        border: 'none',
        textAlign: 'center',
        textTransform: 'uppercase',
        right: '0px',
    },
    copybtn: {
        color: props => chroma(props.background).luminance() >= 0.7 ? "rgba(0,0,0,0.5)" : "white",
        width: '100px',
        height: '30px',
        position: 'absolute',
        display: 'inline-block',
        top: '50%',
        left: '50%',
        marginLeft: '-50px',
        marginTop: '-15px',
        textAlign: 'center',
        outline: 'none',
        background: 'rgba(255, 255, 255, 0.3)',
        fontSize: '1rem',
        lineHeight: '30px',
        opacity: "0",
        border: 'none',
        textTransform: 'uppercase',
        transition: '0.5s',
    },
    boxcontent: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        width: '100%',
        padding: 10,
        color: 'black',
        letterSpacing: 1,
        textTransform: 'uppercase',
        fontSize: 12,
    },
    colorName: {
        color: props => chroma(props.background).luminance() <= 0.5 ? "white" : "black"
    },
    copyText: {
        color: props => chroma(props.background).luminance() >= 0.7 ? "black" : "white",
    }
}