import { colors } from "@material-ui/core";
import zIndex from "@material-ui/core/styles/zIndex";

export default{
    root:{
        backgroundColor:"white",
        border:"1px solid black",
        borderRadius:"5px",
        padding:'0.5rem',
        position:"relative",
        overflow:"hidden",
        cursor:'pointer',
        "&:hover svg":{
           opacity:1
        }
    },
    color:{
            backgroundColor:"#dae1e4",
            height:"150px",
            width:"100%",
            borderRadius:'5px',
            overflow:'hidden'
    },
    title:{
        
        display: "flex",
justifyContent: "space-between",
alignItems: "center",
margin: "0",
color: "black",
paddingTop: "0.5rem",
fontSize: "1rem",

position: "relative"
    },
    emoji:{
        marginLeft:"0.5rem",
        fontSize:"1.5rem",
      
    },
    minibox:{
       
        height: "25%",
        width: "20%",
        display: "inline-block",
        margin: "auto",
        position: "relative",
        marginBottom: "-3.5px"
    },
  
    deleteicon:{
        position:"absolute",
        height:'20px',
        width:'20px',
padding:'0.5rem',
margin:0,
marginTop:'0',
opacity:'0',
zIndex:'10',
color:'white',
backgroundColor:'red',
right:'0px',
top:0
    }
}