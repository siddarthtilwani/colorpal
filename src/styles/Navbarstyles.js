import sizes from "./sizes"
export default{
    Navbar:{
        display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    height: '6vh',
    },
    Logo:{
        marginRight: 15,
    padding: '0 13px',
    fontSize: 22,
    backgroundColor: '#eceff1',
    fontFamily: 'Roboto',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    "& a":{
        textDecoration:"none",
        color:'black'
    },
    [sizes.down('xs')]:{
        display: 'none'
    }
    },
    Slider:{
        width: '340px',
    cursor:' pointer',
    display: 'inline-block',
    margin: '0 10px',
    "& .rc-slider-track":{
        backgroundColor: 'transparent !important',
    },
    "& .rc-slider-rail":{
        height: '8px !important'
    },
    "& .rc-slider-handle ,.rc-slider-handle:active,.rc-slider-handle:focus,.rc-slider-handle:hover":{
        backgroundColor: 'green !important',
        outline: 'none',
        border: '2px solid green !important',
        boxShadow: 'none',
        width: '12px',
        height: '13px',
        marginLeft: '-7px',
        marginTop: '-2px',
    },
    [sizes.down('sm')]:{
       width:'150px'
    }
    },
    Selectcontainer:{
        marginLeft: 'auto',
        marginRight: '1rem'
    }
}