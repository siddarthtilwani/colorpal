
import sizes from "./sizes"
export default{
    Palclass:{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column'
    },
    Palcolors:{
        height: '90%',
          [sizes.down('md')]:{
            width:'50%',
            height:'20%'
        },
        [sizes.down('lg')]:{
            width:'25%',
            height:'33.333%'
        }
         ,[sizes.down('xs')]:{
            width:'100%',
            height:'10%'
        },
       
    },
    goBack:{
     height: "50%",
     width: "20%",
     display: "inline-block",
     margin: "0 auto",
     position: "relative",
     cursor: "pointer",
     marginBottom: "-3.5px",
     
         opacity: "1",
         backgroundColor:"black",
         position:"relative",
         "& a":{
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
       background:' rgba(255, 255, 255,0.3)',
       fontSize: '1rem',
       lineHeight: '30px',
       color: 'white',
  textDecoration:"none",
       border: 'none',
       textTransform: 'uppercase',
       transition: '0.5s'
         },[sizes.down('md')]:{
            width:'50%',
            height:'20%'
        }
         ,[sizes.down('xs')]:{
            width:'100%',
            height:'10%'
        }
     
    }
   
}